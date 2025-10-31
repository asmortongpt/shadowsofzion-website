'use client'

import { useState } from 'react'

export default function Contact() {
  const [contactStatus, setContactStatus] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setContactStatus('sending')

    // Using Formspree (free service) - you'll need to set this up at formspree.io
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setContactStatus('success')
        form.reset()
      } else {
        setContactStatus('error')
      }
    } catch (error) {
      setContactStatus('error')
    }
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    setSubscribeStatus('sending')

    // Store in localStorage for now, can be upgraded to real backend later
    try {
      const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem('subscribers', JSON.stringify(subscribers))
      }
      setSubscribeStatus('success')
      form.reset()
    } catch (error) {
      setSubscribeStatus('error')
    }
  }
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-metal text-band-red mb-4">LET'S CONNECT</h1>
          <p className="text-xl text-gray-300">
            Got questions? Want to collaborate? Need booking information?
            <br />
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* General */}
          <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-band-red mb-2">GENERAL INQUIRIES</h3>
            <a href="mailto:band@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition" data-cfasync="false">
              band@shadowsofzion.com
            </a>
          </div>

          {/* Booking */}
          <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎸</div>
            <h3 className="text-xl font-bold text-band-red mb-2">BOOKING & EVENTS</h3>
            <a href="mailto:booking@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition" data-cfasync="false">
              booking@shadowsofzion.com
            </a>
          </div>

          {/* Press */}
          <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-bold text-band-red mb-2">PRESS & MEDIA</h3>
            <a href="mailto:press@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition" data-cfasync="false">
              press@shadowsofzion.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-band-red to-black rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-white mb-6 text-center">SEND US A MESSAGE</h2>
          <form className="space-y-6" onSubmit={handleContactSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={contactStatus === 'sending'}
              className="w-full bg-band-gold hover:bg-yellow-600 text-black font-bold py-4 rounded-lg transition disabled:opacity-50"
            >
              {contactStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            {contactStatus === 'success' && (
              <p className="text-green-400 text-center">✓ Message sent successfully!</p>
            )}
            {contactStatus === 'error' && (
              <p className="text-red-400 text-center">✗ Error sending message. Please email us directly at band@shadowsofzion.com</p>
            )}
          </form>
          <p className="text-gray-400 text-sm text-center mt-4">
            Messages go directly to band@shadowsofzion.com
          </p>
        </div>

        {/* Social Media - UPDATE WHEN YOU CREATE ACCOUNTS */}
        <div className="bg-band-dark rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-band-red mb-8 text-center">FOLLOW US</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <a href="https://instagram.com/shadowsofzionmusic" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-band-gold transition transform hover:scale-110">
              <div className="text-4xl mb-2">📷</div>
              <p className="font-bold">Instagram</p>
              <p className="text-sm text-gray-500">@shadowsofzionmusic</p>
            </a>
            <a href="https://facebook.com/shadowsofzion" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-band-gold transition transform hover:scale-110">
              <div className="text-4xl mb-2">📘</div>
              <p className="font-bold">Facebook</p>
              <p className="text-sm text-gray-500">/shadowsofzion</p>
            </a>
            <a href="https://tiktok.com/@shadowsofzion" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-band-gold transition transform hover:scale-110">
              <div className="text-4xl mb-2">🎵</div>
              <p className="font-bold">TikTok</p>
              <p className="text-sm text-gray-500">@shadowsofzion</p>
            </a>
            <a href="https://youtube.com/@shadowsofzion" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-band-gold transition transform hover:scale-110">
              <div className="text-4xl mb-2">▶️</div>
              <p className="font-bold">YouTube</p>
              <p className="text-sm text-gray-500">Shadows of Zion</p>
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center mt-6">
            🎯 These links will work once you create the accounts - just claim these usernames!
          </p>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
          <h2 className="text-3xl font-metal text-band-red mb-4">JOIN OUR MAILING LIST</h2>
          <p className="text-gray-300 mb-6">
            Get updates about new music and shows.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-red focus:outline-none"
            />
            <button
              type="submit"
              disabled={subscribeStatus === 'sending'}
              className="bg-band-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition disabled:opacity-50"
            >
              {subscribeStatus === 'sending' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </form>
          {subscribeStatus === 'success' && (
            <p className="text-green-400 mt-4">✓ Thanks for subscribing!</p>
          )}
          {subscribeStatus === 'error' && (
            <p className="text-red-400 mt-4">✗ Error subscribing. Please try again.</p>
          )}
          <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  )
}
