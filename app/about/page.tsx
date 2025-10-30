export const metadata = {
  title: 'About Shadows of Zion | Christian Rock Band',
  description: 'Learn the story behind Shadows of Zion, a Christian rock band bringing messages of faith, redemption, and hope',
}

export default function About() {
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-metal text-band-red mb-4">FROM THE ASHES</h1>
          <p className="text-2xl text-band-gold">The Shadows of Zion Story</p>
        </div>

        {/* Band Story */}
        <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-12 mb-16">
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Look, we're not going to pretend we have it all figured out. This band started because
            we needed somewhere to put all the mess - the questions, the doubts, the fights with God.
            Turns out, when you're honest about the struggle, that's when real faith shows up.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            The name came from realizing we spend a lot of time in the shadows. Life beats you down,
            you question everything, and sometimes faith feels like holding onto smoke. But there's
            this pull toward something better - toward Zion, toward home, toward actually being okay.
            We're somewhere in between. Most days, anyway.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            We play loud because quiet doesn't cut it when you're trying to drown out the noise in your head.
            We write songs about the stuff that actually keeps you up at 3 AM - not the sanitized church version,
            but the real version. The one where you're pissed off, confused, and still somehow hoping God's listening.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed">
            This isn't music for people who have their lives together. It's for everyone else -
            the ones who are tired of pretending, who've screwed up more times than they can count,
            and who are still showing up because maybe, just maybe, there's something on the other side
            of all this dust.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-band-red rounded-lg p-12 text-center">
          <h2 className="text-4xl font-metal text-white mb-6">WHY WE DO THIS</h2>
          <p className="text-white text-xl leading-relaxed mb-6">
            We make music for the people who feel like they don't belong anywhere else.
            The ones churches sometimes don't know what to do with. The messy ones. The angry ones.
            The ones who love God but can't stand religion. That's our crowd.
          </p>
          <p className="text-band-gold text-xl font-semibold">
            If you've ever felt more like dust than glory,
            <br />
            you're exactly who these songs are for.
          </p>
        </div>
      </div>
    </div>
  )
}
