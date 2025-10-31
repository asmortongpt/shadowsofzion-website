'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    // Send to your analytics endpoint
    trackPageView(url)
  }, [pathname, searchParams])

  return null
}

function trackPageView(url: string) {
  // Get visitor information
  const data = {
    url,
    timestamp: new Date().toISOString(),
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    // Session tracking
    sessionId: getOrCreateSessionId(),
    visitorId: getOrCreateVisitorId(),
  }

  // Send to analytics (you can replace this with your backend)
  console.log('Analytics:', data)

  // Optional: Send to a backend API
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // }).catch(err => console.error('Analytics error:', err))
}

function getOrCreateSessionId(): string {
  const SESSION_DURATION = 30 * 60 * 1000 // 30 minutes
  const now = Date.now()

  const sessionData = sessionStorage.getItem('analytics_session')
  if (sessionData) {
    const { id, timestamp } = JSON.parse(sessionData)
    if (now - timestamp < SESSION_DURATION) {
      // Update timestamp
      sessionStorage.setItem('analytics_session', JSON.stringify({ id, timestamp: now }))
      return id
    }
  }

  // Create new session
  const newId = generateId()
  sessionStorage.setItem('analytics_session', JSON.stringify({ id: newId, timestamp: now }))
  return newId
}

function getOrCreateVisitorId(): string {
  let visitorId = localStorage.getItem('analytics_visitor')
  if (!visitorId) {
    visitorId = generateId()
    localStorage.setItem('analytics_visitor', visitorId)
  }
  return visitorId
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Track custom events
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  const data = {
    event: eventName,
    properties,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
    sessionId: getOrCreateSessionId(),
    visitorId: getOrCreateVisitorId(),
  }

  console.log('Event:', data)

  // Optional: Send to backend
  // fetch('/api/analytics/events', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // }).catch(err => console.error('Event tracking error:', err))
}
