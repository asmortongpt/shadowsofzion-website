import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional guitar background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-guitar.jpg')",
            filter: 'brightness(0.3)'
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-metal text-band-red mb-6 drop-shadow-[0_0_40px_rgba(139,0,0,0.8)]">
            SHADOWS OF ZION
          </h1>
          <p className="text-3xl md:text-4xl text-band-gold mb-4 drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]">
            Christian Rock from the Ashes
          </p>
          <p className="text-xl md:text-2xl text-white mb-12 font-light tracking-wide">
            Faith. Fire. Fury.
          </p>
          <Link
            href="/music"
            className="inline-block bg-band-red hover:bg-red-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition transform hover:scale-105 shadow-2xl hover:shadow-red-900/70"
          >
            LISTEN NOW
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-metal text-band-red mb-8">FROM DUST TO GLORY</h2>
          <div className="w-24 h-1 bg-band-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We're Shadows of Zion, a Christian rock band bringing a message of faith,
            redemption, and hope through hard-hitting rock music. Our debut album
            "Dust to Glory" is streaming now on all platforms.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mt-6">
            Every song tells a story. Every note carries a message. Every lyric points to the light.
          </p>
        </div>
      </section>

      {/* Streaming Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-band-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-metal text-band-red mb-8">
            STREAM "DUST TO GLORY" NOW
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            16 tracks of faith-driven rock. Available everywhere you listen.
          </p>

          {/* Spotify Embed Placeholder */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-band-gold mb-4">🎵 Spotify Player</p>
            <p className="text-sm text-gray-400">Add your Spotify embed code here</p>
          </div>

          {/* Streaming Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://open.spotify.com/album/51N7ZyePifyiLQgLOY9ho8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              STREAM ON SPOTIFY
            </a>
            <a
              href="https://music.apple.com/us/album/dust-to-glory/1849248646"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              LISTEN ON APPLE MUSIC
            </a>
            <a
              href="https://music.amazon.com/search/shadows%20of%20zion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
            >
              PLAY ON AMAZON MUSIC
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center">
            Every stream counts! Support Shadows of Zion on your favorite platform.
            <br />
            You get paid $0.003-$0.005 per Spotify stream.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-metal text-band-red mb-6">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive content, behind-the-scenes updates, and be the first to hear new music.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-band-red focus:outline-none"
            />
            <button
              type="submit"
              className="bg-band-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
