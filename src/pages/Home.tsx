import { Link } from 'react-router-dom'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Home = () => {
  const { connected } = useWallet()

  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nongki DAO: Komunitas Web3 untuk{' '}
                <span className="neon-text">UMKM Indonesia</span>
              </h1>
              <p className="text-light-muted mb-8 text-lg">
                Bergabunglah dengan komunitas digital yang menghubungkan
                pengunjung dengan warung UMKM. Dapatkan token NONGKI dan NFT
                eksklusif setiap kali Anda bertransaksi.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {!connected ? (
                  <WalletMultiButton className="wallet-adapter-button" />
                ) : (
                  <Link
                    to="/warung"
                    className="btn-primary py-3 px-6 inline-block text-center"
                  >
                    Jelajahi Warung
                  </Link>
                )}
                <Link
                  to="/dao"
                  className="btn-outline py-3 px-6 inline-block text-center"
                >
                  Tentang DAO
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden border border-dark-border shadow-neon">
                <img
                  src="/images/hero-image.jpg"
                  alt="Nongki DAO"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-light border-y border-dark-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Bagaimana <span className="neon-text">Nongki DAO</span> Bekerja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-dark-medium rounded-full flex items-center justify-center mb-4 border border-primary shadow-neon">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Kunjungi Warung
              </h3>
              <p className="text-light-gray">
                Temukan warung UMKM terdekat dan event menarik yang sedang
                berlangsung melalui aplikasi Nongki DAO.
              </p>
            </div>
            <div className="card p-6 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-dark-medium rounded-full flex items-center justify-center mb-4 border border-primary shadow-neon">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Lakukan Transaksi
              </h3>
              <p className="text-light-gray">
                Bayar makanan atau minuman Anda dengan mudah menggunakan wallet
                Solana dan dapatkan token NONGKI sebagai reward.
              </p>
            </div>
            <div className="card p-6 hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-dark-medium rounded-full flex items-center justify-center mb-4 border border-primary shadow-neon">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Dapatkan Rewards
              </h3>
              <p className="text-light-gray">
                Kumpulkan token NONGKI dan NFT eksklusif yang bisa digunakan
                untuk diskon, event khusus, dan voting dalam DAO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
