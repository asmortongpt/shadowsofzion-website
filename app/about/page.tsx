export const metadata = {
  title: 'About Shadows of Zion | Christian Rock Band',
  description: 'Learn the story behind Shadows of Zion, a Christian rock band bringing messages of faith, redemption, and hope',
}

export default function About() {
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-metal text-band-red mb-4">SHADOWS OF ZION</h1>
          <p className="text-2xl text-band-gold">Christian Rock</p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-12 mb-12 border-2 border-band-gold">

          <blockquote className="text-band-gold text-2xl italic mb-12 text-center border-l-4 border-band-gold pl-6">
            "Can these bones live?" - Ezekiel 37:3
          </blockquote>

          <div className="space-y-8 text-center">
            <p className="text-gray-300 text-xl leading-relaxed">
              Heavy rock music with biblical themes. Songs about faith, doubt, struggle, and redemption.
              From the darkness of the valley to the light of the mountaintop.
            </p>

            <div className="bg-black rounded-lg p-8 border border-band-gold">
              <p className="text-white text-lg mb-4">
                <span className="text-band-gold font-bold">Shadows</span> - The darkness. The doubt. The hard parts.
              </p>
              <p className="text-white text-lg">
                <span className="text-band-gold font-bold">Of Zion</span> - The hope. The journey home. The God who meets us in the valley.
              </p>
            </div>

            <div className="py-6">
              <p className="text-white text-3xl font-bold mb-4">
                FROM DUST TO GLORY
              </p>
              <p className="text-gray-300 text-lg">
                Sixteen tracks of honest Christian rock
              </p>
            </div>

            <a
              href="/music"
              className="inline-block bg-band-red hover:bg-red-700 text-white font-bold text-xl py-4 px-12 rounded-lg transition transform hover:scale-105 border-2 border-band-gold"
            >
              LISTEN TO THE ALBUM
            </a>
          </div>

        </div>

        {/* Simple Footer */}
        <div className="text-center text-gray-400 text-lg mb-12">
          <p>Rock music about God.</p>
        </div>
      </div>
    </div>
  )
}
