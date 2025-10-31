'use client'

import { useState } from 'react'
import { trackEvent } from '../analytics'

interface Track {
  number: number
  title: string
  biblicalContext: string
  scripture: string
  story: string
  spotifyUri?: string
}

const tracks: Track[] = [
  {
    number: 1,
    title: "From Dust to Glory",
    biblicalContext: "Genesis 2:7 - 'Then the LORD God formed man of dust from the ground'",
    scripture: "Genesis 2:7, 2 Corinthians 4:17",
    story: "This song captures the essence of our transformation from broken, earthly beings (dust) to redeemed children of God (glory). It reflects on how God breathed life into dust to create humanity, and through Christ's redemption, transforms our temporary afflictions into eternal glory. The journey from dust to glory is every believer's story - from death to life, from shame to honor, from brokenness to wholeness.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_1"
  },
  {
    number: 2,
    title: "We Believe in the Fire",
    biblicalContext: "Malachi 3:2-3 - 'He is like a refiner's fire'",
    scripture: "Malachi 3:2-3, 1 Peter 1:7, Hebrews 12:29",
    story: "Drawing from the biblical imagery of God as a refiner's fire, this song explores how trials and hardships burn away our impurities. Just as gold is refined through fire, our faith is tested and purified through suffering. The fire represents both God's purifying presence and the trials we endure. We believe in the fire because it's through the heat that we become pure, refined, and ready for God's purpose.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_2"
  },
  {
    number: 3,
    title: "Yet I Will Rejoice",
    biblicalContext: "Habakkuk 3:17-18 - 'Yet I will rejoice in the LORD'",
    scripture: "Habakkuk 3:17-19",
    story: "Based directly on Habakkuk's powerful declaration of faith, this song embraces the prophet's resolve to praise God even when everything falls apart. Even if the fig tree doesn't blossom, the fields produce no food, and the flocks are gone - yet we will rejoice in the Lord. It's a declaration of unconditional worship, choosing joy not because circumstances are good, but because God is good regardless of circumstances.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_3"
  },
  {
    number: 4,
    title: "No Weapon",
    biblicalContext: "Isaiah 54:17 - 'No weapon formed against you shall prosper'",
    scripture: "Isaiah 54:17, Romans 8:31, Psalm 91",
    story: "This anthem of spiritual warfare proclaims God's promise of protection over His children. When enemies rise, when accusations fly, when the world seems aligned against you - no weapon formed against you will prosper. It's a declaration of supernatural protection, reminding believers that if God is for us, no force of hell or earth can ultimately prevail against us. Every attack will fail because we stand under divine covering.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_4"
  },
  {
    number: 5,
    title: "Fortress",
    biblicalContext: "Psalm 91:2 - 'He is my refuge and my fortress'",
    scripture: "Psalm 91:1-2, Psalm 46:1, Proverbs 18:10",
    story: "Inspired by David's psalms, this song portrays God as our unshakeable fortress - a place of safety when the world collapses around us. In ancient times, a fortress was the last line of defense, an impenetrable stronghold. When we're overwhelmed, attacked, or afraid, God becomes our fortress. His presence is the high tower we run to, the walls that protect us, the refuge that never fails.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_5"
  },
  {
    number: 6,
    title: "Beaten Not Broken",
    biblicalContext: "2 Corinthians 4:8-9 - 'We are hard pressed...but not crushed'",
    scripture: "2 Corinthians 4:8-10, Psalm 34:18, Isaiah 42:3",
    story: "Paul's words to the Corinthian church perfectly capture this song's message: we are afflicted but not crushed, persecuted but not forsaken, struck down but not destroyed. Life beats us up - there's no denying that. We get wounded, we suffer, we endure pain. But beaten doesn't mean broken. Through Christ's power, our spirit remains unbroken even when our bodies and emotions take the hit. The bruised reed He will not break.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_6"
  },
  {
    number: 7,
    title: "Out of the Void",
    biblicalContext: "Genesis 1:2 - 'The earth was formless and void'",
    scripture: "Genesis 1:1-3, Jeremiah 4:23, 2 Corinthians 5:17",
    story: "Before creation, there was the void - formless, empty, dark. This song parallels that primordial chaos with the emptiness we feel before God speaks into our lives. Just as God called light out of darkness and order out of chaos, He calls us out of the void of our old lives into the light of new creation. When we feel empty, purposeless, lost in darkness - God speaks, and suddenly there is light, life, and meaning where there was nothing.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_7"
  },
  {
    number: 8,
    title: "Burning Fire",
    biblicalContext: "Jeremiah 20:9 - 'His word is in my heart like a burning fire'",
    scripture: "Jeremiah 20:9, Acts 2:3, Luke 24:32",
    story: "Jeremiah couldn't keep silent about God's word - it burned inside him like fire in his bones. This song captures that uncontrollable passion for God's truth. When the Holy Spirit ignites your heart, you can't stay quiet. The message burns within you, demanding to be released. It's the fire of Pentecost, the burning hearts on the road to Emmaus, the unstoppable compulsion to proclaim truth no matter the cost.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_8"
  },
  {
    number: 9,
    title: "The Deep",
    biblicalContext: "Psalm 42:7 - 'Deep calls to deep'",
    scripture: "Psalm 42:7, Ephesians 3:18-19, Job 38:16",
    story: "David wrote about the deep calling to deep - the unfathomable depths of God's nature calling to the deep places within our souls. This song explores the mysterious, overwhelming nature of God's presence. When we encounter the deep things of God, our shallow understanding is confronted by infinite wisdom. The song represents both the terrifying depths of suffering and the profound depths of God's love that meet us there.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_9"
  },
  {
    number: 10,
    title: "King's Return",
    biblicalContext: "Revelation 19:11-16 - 'Behold, a white horse, and He who sat on it'",
    scripture: "Revelation 19:11-16, Acts 1:11, 1 Thessalonians 4:16-17",
    story: "This is the ultimate hope of every believer - Jesus is coming back. Not as the suffering servant, but as the conquering King. Eyes like blazing fire, crowned with many crowns, riding a white horse, with the armies of heaven following Him. The song proclaims the glorious, terrifying, magnificent return of Christ. Every knee will bow. Every enemy will fall. The King is coming back to claim what's His and establish His eternal kingdom.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_10"
  },
  {
    number: 11,
    title: "Armor & Fire",
    biblicalContext: "Ephesians 6:11-17 - 'Put on the full armor of God'",
    scripture: "Ephesians 6:10-18, 2 Timothy 2:3-4",
    story: "Paul's call to spiritual warfare combines with the refining fire of God in this battle anthem. We don't fight with earthly weapons but with the armor of God - truth, righteousness, faith, salvation, and the Word. The fire represents both the trials that test us and the Holy Spirit's power that empowers us. Soldiers of Christ stand firm, armored up, refined by fire, ready for battle against the forces of darkness.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_11"
  },
  {
    number: 12,
    title: "Valley of Bones",
    biblicalContext: "Ezekiel 37:1-14 - 'Can these bones live?'",
    scripture: "Ezekiel 37:1-14, Romans 8:11",
    story: "Ezekiel's vision of the valley of dry bones is one of Scripture's most powerful images of resurrection and restoration. When all hope is dead, when everything looks like a graveyard of broken dreams and failed promises, God asks: 'Can these bones live?' This song is for everyone who feels spiritually dead, emotionally dried up, completely beyond repair. God's Spirit breathes life into dead bones. What looks completely finished is exactly where God's resurrection power begins.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_12"
  },
  {
    number: 13,
    title: "Fireborn",
    biblicalContext: "John 3:3-7 - 'You must be born again'",
    scripture: "John 3:3-8, Titus 3:5, 1 Peter 1:23",
    story: "Jesus told Nicodemus about being born again - not of flesh, but of Spirit. This song celebrates the radical transformation that occurs when someone is born again in Christ. The old life dies, burned away in the refiner's fire. We emerge as new creations, born from above, born of the Spirit, born through fire. It's a complete rebirth - not renovation, but total regeneration. We are fireborn - forged in divine flames, created anew by the Spirit of God.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_13"
  },
  {
    number: 14,
    title: "Humanity",
    biblicalContext: "Genesis 1:27 - 'In the image of God He created them'",
    scripture: "Genesis 1:26-27, Psalm 8:3-5, Romans 3:23",
    story: "This song wrestles with the paradox of humanity - created in God's image yet fallen into sin. We are fearfully and wonderfully made, crowned with glory and honor, yet we've all sinned and fallen short. It explores the tension between our divine design and our broken reality, between what we were meant to be and what we've become. But it also points to Christ, the perfect human who shows us what redeemed humanity looks like.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_14"
  },
  {
    number: 15,
    title: "Serenity",
    biblicalContext: "Philippians 4:7 - 'The peace of God, which surpasses all understanding'",
    scripture: "Philippians 4:6-7, John 14:27, Isaiah 26:3",
    story: "In the chaos of life, God offers a peace that makes no logical sense - a serenity that transcends circumstances. This isn't the absence of trouble, but the presence of God's supernatural calm in the middle of the storm. Jesus slept in the boat while the disciples panicked. That's the serenity we're offered - not because everything is okay, but because we trust the One who controls the waves. Perfect peace for those whose minds are stayed on Him.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_15"
  },
  {
    number: 16,
    title: "Not Afraid",
    biblicalContext: "Psalm 23:4 - 'I will fear no evil, for You are with me'",
    scripture: "Psalm 23:4, Joshua 1:9, 2 Timothy 1:7",
    story: "The ultimate declaration of fearless faith. Even walking through the valley of the shadow of death, we will not be afraid. Why? Because God is with us. His rod and staff comfort us. We didn't receive a spirit of fear, but of power, love, and a sound mind. This song is spiritual defiance against every fear - fear of death, fear of failure, fear of the future. In Christ, we stand unafraid because greater is He who is in us than he who is in the world.",
    spotifyUri: "spotify:track:YOUR_TRACK_ID_16"
  }
]

export default function Music() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-metal text-band-red mb-4">DUST TO GLORY</h1>
          <p className="text-2xl text-band-gold">Our Debut Album</p>
        </div>

        {/* Album Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Album Cover Placeholder */}
          <div>
            <div className="bg-gradient-to-br from-band-red to-black aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-band-gold text-4xl font-metal mb-4">SHADOWS OF ZION</p>
                <p className="text-white text-2xl">DUST TO GLORY</p>
              </div>
            </div>
          </div>

          {/* Album Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">About the Album</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "Dust to Glory" is a 16-track journey through struggle, faith, and redemption.
              Raw. Real. Redeemed.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              From the opening track to the final note, this album speaks to anyone who's
              walked through the valley and emerged stronger on the other side.
            </p>
            <p className="text-band-gold text-lg font-semibold">
              Every stream supports our ministry and helps us reach more people with
              this message of hope.
            </p>
          </div>
        </div>

        {/* Streaming Section */}
        <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-band-red mb-8 text-center">CHOOSE YOUR PLATFORM</h2>

          {/* Spotify Embed Placeholder */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <p className="text-band-gold text-center">🎵 Spotify Player Embed</p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Add your Spotify album embed code in the component
            </p>
          </div>

          {/* Streaming Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://open.spotify.com/album/51N7ZyePifyiLQgLOY9ho8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('streaming_click', { platform: 'spotify', location: 'main_buttons' })}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              STREAM ON SPOTIFY
            </a>
            <a
              href="https://music.apple.com/us/album/dust-to-glory/1849248646"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('streaming_click', { platform: 'apple_music', location: 'main_buttons' })}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              APPLE MUSIC
            </a>
            <a
              href="https://music.amazon.com/search/shadows%20of%20zion"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('streaming_click', { platform: 'amazon_music', location: 'main_buttons' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              AMAZON MUSIC
            </a>
          </div>
          <div className="mt-6 p-4 bg-black rounded-lg border border-band-gold">
            <p className="text-band-gold text-center font-semibold">
              STREAM "DUST TO GLORY" NOW
            </p>
            <p className="text-gray-400 text-sm text-center mt-2">
              Every stream supports our ministry → Share the music and spread the message!
            </p>
          </div>
        </div>

        {/* Track Listing */}
        <div className="bg-band-dark rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-band-red mb-8 text-center">TRACK LISTING</h2>
          <p className="text-band-gold text-center mb-6">Click any track to hear the biblical story behind the song</p>
          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((track) => (
              <button
                key={track.number}
                onClick={() => {
                  setSelectedTrack(track)
                  trackEvent('track_clicked', {
                    trackNumber: track.number,
                    trackTitle: track.title
                  })
                }}
                className="flex items-center py-3 px-4 bg-black rounded-lg hover:bg-gray-900 hover:border-band-gold border border-transparent transition transform hover:scale-105 cursor-pointer text-left"
              >
                <span className="text-band-gold font-bold mr-4">{track.number.toString().padStart(2, '0')}</span>
                <span className="text-white">{track.title}</span>
                <span className="ml-auto text-band-gold">▶</span>
              </button>
            ))}
          </div>
        </div>

        {/* Track Detail Modal */}
        {selectedTrack && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTrack(null)}
          >
            <div
              className="bg-gradient-to-br from-band-dark to-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-band-gold"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-band-red p-6 sticky top-0 z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-band-gold text-sm font-bold">TRACK {selectedTrack.number.toString().padStart(2, '0')}</span>
                    <h3 className="text-3xl font-metal text-white mb-2">{selectedTrack.title}</h3>
                    <p className="text-gray-200 text-sm italic">{selectedTrack.biblicalContext}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTrack(null)}
                    className="text-white hover:text-band-gold text-4xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {/* Spotify Player Embed */}
                <div className="bg-black rounded-lg p-6 mb-8">
                  <div className="aspect-[3/1] bg-gradient-to-r from-green-900 to-black rounded flex items-center justify-center border border-green-600">
                    <div className="text-center">
                      <p className="text-green-400 text-xl font-bold mb-2">🎵 Listen on Spotify</p>
                      <a
                        href="https://open.spotify.com/album/51N7ZyePifyiLQgLOY9ho8"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('streaming_click', {
                          platform: 'spotify',
                          location: 'track_modal',
                          trackNumber: selectedTrack.number,
                          trackTitle: selectedTrack.title
                        })}
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition"
                      >
                        PLAY ON SPOTIFY
                      </a>
                      <p className="text-gray-400 text-xs mt-3">Full album streaming now</p>
                    </div>
                  </div>
                </div>

                {/* Biblical Story */}
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-band-gold mb-4 flex items-center">
                    <span className="text-3xl mr-2">📖</span>
                    The Biblical Story
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">{selectedTrack.story}</p>
                </div>

                {/* Scripture References */}
                <div className="bg-black rounded-lg p-6 border-l-4 border-band-gold">
                  <h4 className="text-xl font-bold text-band-gold mb-3">Scripture References</h4>
                  <p className="text-gray-300">{selectedTrack.scripture}</p>
                  <p className="text-gray-500 text-sm mt-4 italic">
                    Open your Bible and read these passages to dive deeper into the message
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                  <p className="text-band-gold font-semibold mb-4">Share this song's message with someone who needs to hear it</p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://open.spotify.com/album/51N7ZyePifyiLQgLOY9ho8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
                    >
                      Stream Album
                    </a>
                    <button
                      onClick={() => setSelectedTrack(null)}
                      className="bg-band-dark hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition border border-band-gold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Behind the Album */}
        <div className="text-center bg-gradient-to-br from-band-red to-black rounded-lg p-12">
          <h2 className="text-3xl font-metal text-white mb-6">BEHIND THE ALBUM</h2>
          <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            "Dust to Glory" wasn't just recorded in a studio - it was forged through
            personal struggles, spiritual battles, and ultimate redemption. These songs
            are our testimony, set to the soundtrack of heavy guitars and driving drums.
          </p>
          <p className="text-band-gold text-xl font-semibold">
            This album is for anyone who's ever felt broken, lost, or forgotten.
            It's a reminder that God takes our dust and turns it into glory.
          </p>
        </div>
      </div>
    </div>
  )
}
