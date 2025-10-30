export const metadata = {
  title: 'Contact Shadows of Zion | Booking & Press',
  description: 'Get in touch with Shadows of Zion for booking, press inquiries, or general questions',
}

export default function Contact() {
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
            <a href="mailto:band@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition">
              band@shadowsofzion.com
            </a>
          </div>

          {/* Booking */}
          <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🎸</div>
            <h3 className="text-xl font-bold text-band-red mb-2">BOOKING & EVENTS</h3>
            <a href="mailto:booking@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition">
              booking@shadowsofzion.com
            </a>
          </div>

          {/* Press */}
          <div className="bg-gradient-to-br from-band-dark to-black rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-bold text-band-red mb-2">PRESS & MEDIA</h3>
            <a href="mailto:press@shadowsofzion.com" className="text-gray-300 hover:text-band-gold transition">
              press@shadowsofzion.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-band-red to-black rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-white mb-6 text-center">SEND US A MESSAGE</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-gold focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-band-gold hover:bg-yellow-600 text-black font-bold py-4 rounded-lg transition"
            >
              SEND MESSAGE
            </button>
          </form>
          <p className="text-gray-300 text-sm text-center mt-4">
            * This form needs to be connected to an email service
          </p>
        </div>

        {/* Social Media - UPDATE WHEN YOU CREATE ACCOUNTS */}
        <div className="bg-band-dark rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-metal text-band-red mb-8 text-center">FOLLOW US</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <a href="https://instagram.com/shadowsofzion" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-band-gold transition transform hover:scale-110">
              <div className="text-4xl mb-2">📷</div>
              <p className="font-bold">Instagram</p>
              <p className="text-sm text-gray-500">@shadowsofzion</p>
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
            Get exclusive content, new music alerts, and behind-the-scenes updates
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-band-red focus:outline-none"
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
      </div>
    </div>
  )
}
