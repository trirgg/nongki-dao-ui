import { Link } from 'react-router-dom'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Header = () => {
  const { connected } = useWallet()

  return (
    <header className="bg-dark-light border-b border-dark-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold neon-text cursor-pointer">
            Nongki DAO
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/warung"
              className="text-light-muted hover:text-primary transition cursor-pointer"
            >
              Warung
            </Link>
            <Link
              to="/events"
              className="text-light-muted hover:text-primary transition cursor-pointer"
            >
              Events
            </Link>
            <Link
              to="/dao"
              className="text-light-muted hover:text-primary transition cursor-pointer"
            >
              DAO
            </Link>
            {connected && (
              <Link
                to="/profile"
                className="text-light-muted hover:text-primary transition cursor-pointer"
              >
                Profil
              </Link>
            )}
          </nav>
        </div>
        <WalletMultiButton className="wallet-adapter-button-trigger" />
      </div>
    </header>
  )
}

export default Header
