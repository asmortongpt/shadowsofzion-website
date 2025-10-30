export const metadata = {
  title: 'Dust to Glory Album | Shadows of Zion',
  description: 'Stream Dust to Glory - 16 tracks of faith-driven Christian rock from Shadows of Zion',
}

export default function Music() {
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

          {/* Streaming Buttons - REPLACE WITH YOUR REAL LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://open.spotify.com/album/YOUR-ALBUM-ID"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              STREAM ON SPOTIFY
            </a>
            <a
              href="https://music.apple.com/us/album/YOUR-ALBUM-ID"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              APPLE MUSIC
            </a>
            <a
              href="https://music.amazon.com/albums/YOUR-ALBUM-ID"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition text-center transform hover:scale-105"
            >
              AMAZON MUSIC
            </a>
          </div>
          <div className="mt-6 p-4 bg-black rounded-lg border border-band-gold">
            <p className="text-band-gold text-center font-semibold">
              YOU GET PAID WHEN PEOPLE STREAM YOUR MUSIC
            </p>
            <p className="text-gray-400 text-sm text-center mt-2">
              Replace "YOUR-ALBUM-ID" with real links from CDBaby → Every stream = $0.003-$0.005 in your pocket
            </p>
          </div>
        </div>

        {/* Track Listing */}
        <div className="bg-band-dark rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-band-red mb-8 text-center">TRACK LISTING</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="flex items-center py-3 px-4 bg-black rounded-lg hover:bg-gray-900 transition">
                <span className="text-band-gold font-bold mr-4">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="text-white">Track {i + 1}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">
            * Get actual track names from your CDBaby account
          </p>
        </div>

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
