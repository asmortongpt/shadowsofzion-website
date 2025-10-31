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
        <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-12 mb-16 border-l-4 border-band-red">
          <blockquote className="text-band-gold text-2xl italic mb-8 border-l-4 border-band-gold pl-6">
            "Can these bones live?" - Ezekiel 37:3
          </blockquote>

          <p className="text-white text-2xl font-bold mb-6">
            We started in a valley of dry bones.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            This music exists for a specific kind of person. Not metaphorically. Not poetically.
            <span className="text-white font-semibold"> The ones who are literally</span> spiritually dead,
            emotionally bankrupt, staring at the wreckage of what they thought faith was supposed to be.
            When church doesn't have answers for the real questions. When religion can't handle the real pain.
            When somewhere between the Sunday morning smile and the Saturday night breakdown, you realize:
            <span className="text-band-gold font-semibold"> if you're going to survive this, you need to stop pretending.</span>
          </p>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            These songs give voice to what gets silenced everywhere else. The <span className="text-white">3 AM panic attacks</span>.
            The <span className="text-white">unanswered prayers</span>. The <span className="text-white">nights
            you're so angry at God you can barely breathe</span> - and the mornings you wake up and somehow,
            impossibly, there's still a spark. Still a pull. Still this stubborn hope that maybe,
            just maybe, resurrection is real.
          </p>

          <div className="bg-black rounded-lg p-8 mb-6 border border-band-gold">
            <p className="text-band-gold text-xl font-semibold mb-4">The name says it all:</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-white font-bold">Shadows</span> - for the honesty about darkness.
              The depression. The doubt. The places where faith feels more like fumbling in the dark than walking in the light.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              <span className="text-white font-bold">Of Zion</span> - because even in the shadows, there's movement toward
              something. Toward home. Toward healing. Toward the God who meets people in the valley and breathes life into dead things.
            </p>
          </div>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            This is <span className="text-band-red font-bold">LOUD</span> music because whispers get drowned out by the
            screaming in your head. It's <span className="text-band-red font-bold">HARD</span> because
            gentle doesn't cut it when you're fighting demons. It's <span className="text-band-red font-bold">REAL</span> because
            fake Christianity is what breaks people in the first place.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            These songs aren't the sanitized, radio-friendly, "everything's fine" version of faith.
            This is music for <span className="text-white">the ones who've been beaten down</span>,
            <span className="text-white"> the ones who've questioned everything</span>,
            <span className="text-white"> the ones who've looked God straight in the eye and said
            "I don't understand You, but I'm not letting go."</span>
          </p>

          <p className="text-white text-2xl font-bold mb-4">
            From Dust to Glory.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            That's not just an album title. That's the journey this music is about. From the ashes of what you thought you knew,
            to the fire that refines what actually matters. From the valley where hope died, to the moment
            breath returns to dry bones. From the shadows where you're afraid and angry and broken,
            to Zion - where you're finally, impossibly, somehow... <span className="text-band-gold font-bold text-2xl">home</span>.
          </p>

          <div className="mt-8 pt-8 border-t border-band-gold">
            <p className="text-gray-400 italic text-lg">
              If you've ever felt more like dust than glory, if you've ever been too broken for Sunday morning,
              if you've ever loved God and hated religion in the same breath -
              <span className="text-band-gold font-semibold"> this music is for you. You're exactly where you're supposed to be.</span>
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-band-red to-black rounded-lg p-12 mb-16 border-2 border-band-gold">
          <h2 className="text-5xl font-metal text-white mb-8 text-center">WHY WE DO THIS</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-white text-2xl leading-relaxed mb-8 text-center font-semibold">
              Because someone needs to make music for the misfits.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black bg-opacity-50 rounded-lg p-6 border-l-4 border-band-gold">
                <h3 className="text-band-gold font-bold text-xl mb-3">For the Broken</h3>
                <p className="text-gray-300">
                  The ones who've been told they're "too much" for church. Too loud. Too damaged. Too honest.
                  Too real. We say you're not too much - you're exactly enough.
                </p>
              </div>

              <div className="bg-black bg-opacity-50 rounded-lg p-6 border-l-4 border-band-gold">
                <h3 className="text-band-gold font-bold text-xl mb-3">For the Doubters</h3>
                <p className="text-gray-300">
                  The ones who have more questions than answers. Who've wrestled with God and walked away limping.
                  Who keep showing up even when it doesn't make sense. Your doubts don't disqualify you.
                </p>
              </div>

              <div className="bg-black bg-opacity-50 rounded-lg p-6 border-l-4 border-band-gold">
                <h3 className="text-band-gold font-bold text-xl mb-3">For the Fighters</h3>
                <p className="text-gray-300">
                  The ones battling demons no one else can see. Fighting addictions, depression, anxiety,
                  trauma - and still refusing to give up. Your scars are proof you're a survivor.
                </p>
              </div>

              <div className="bg-black bg-opacity-50 rounded-lg p-6 border-l-4 border-band-gold">
                <h3 className="text-band-gold font-bold text-xl mb-3">For the Outcasts</h3>
                <p className="text-gray-300">
                  The ones who don't fit the Christian stereotype. Who love God but can't do the
                  religious performance. Who'd rather be honest than acceptable. Welcome home.
                </p>
              </div>
            </div>

            <div className="bg-black rounded-lg p-8 mb-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We're not here to water down the message. We're not here to make Christianity comfortable or easy or safe.
              </p>
              <p className="text-white text-xl leading-relaxed font-semibold">
                We're here to say: <span className="text-band-gold">the valley of dry bones is real,
                but so is the resurrection</span>.
              </p>
            </div>

            <blockquote className="border-l-4 border-band-gold pl-6 mb-8">
              <p className="text-white text-2xl italic mb-4">
                "Then He said to me, 'Prophesy to these bones and say to them, "Dry bones, hear the word of the LORD!"'"
              </p>
              <p className="text-band-gold text-lg">- Ezekiel 37:4</p>
            </blockquote>

            <div className="text-center bg-black bg-opacity-70 rounded-lg p-8 border-2 border-band-gold">
              <p className="text-band-gold text-3xl font-bold mb-4">
                IF YOU'VE EVER FELT MORE LIKE DUST THAN GLORY...
              </p>
              <p className="text-white text-xl mb-4">
                If Sunday morning feels fake but Saturday night feels hopeless...
              </p>
              <p className="text-white text-xl mb-4">
                If you love God but can't stand religion...
              </p>
              <p className="text-white text-xl mb-6">
                If you're broken, angry, questioning, fighting, and still somehow believing...
              </p>
              <p className="text-band-gold text-2xl font-bold">
                These songs are for you. This band is for you. You belong here.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-6">
            We're not promising you answers. We're promising you you're not alone in the questions.
          </p>
          <a
            href="/music"
            className="inline-block bg-band-red hover:bg-red-700 text-white font-bold text-xl py-4 px-12 rounded-lg transition transform hover:scale-105 border-2 border-band-gold"
          >
            HEAR THE STORY → DUST TO GLORY
          </a>
        </div>
      </div>
    </div>
  )
}
