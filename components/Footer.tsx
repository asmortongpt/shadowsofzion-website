export default function Footer() {
  return (
    <footer className="bg-band-dark border-t border-band-red mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-metal text-band-red mb-4">SHADOWS OF ZION</h3>
            <p className="text-gray-400">Christian Rock from the Ashes</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-band-red transition">Home</a></li>
              <li><a href="/music" className="text-gray-400 hover:text-band-red transition">Music</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-band-red transition">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-band-red transition">Contact</a></li>
            </ul>
          </div>

          {/* Social - UPDATE THESE LINKS WHEN YOU CREATE ACCOUNTS */}
          <div>
            <h4 className="text-white font-bold mb-4">FOLLOW US</h4>
            <div className="space-y-2">
              <a href="https://instagram.com/shadowsofzionmusic" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-band-gold transition">
                📷 Instagram: @shadowsofzionmusic
              </a>
              <a href="https://facebook.com/shadowsofzion" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-band-gold transition">
                📘 Facebook: /shadowsofzion
              </a>
              <a href="https://tiktok.com/@shadowsofzion" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-band-gold transition">
                🎵 TikTok: @shadowsofzion
              </a>
              <a href="mailto:band@shadowsofzion.com" className="block text-gray-400 hover:text-band-gold transition" data-cfasync="false">
                📧 band@shadowsofzion.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shadows of Zion. All Rights Reserved.</p>
          <p className="mt-2">Faith. Fire. Fury.</p>
        </div>
      </div>
    </footer>
  )
}
