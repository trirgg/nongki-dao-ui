import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

// Dummy data untuk contoh
const warungData = {
  id: 'warung-1',
  name: 'Warung Kopi Nongki',
  description:
    'Warung kopi lokal dengan suasana nyaman dan kopi berkualitas tinggi.',
  fullDescription:
    'Warung Kopi Nongki adalah warung kopi lokal yang menyajikan berbagai jenis kopi dari biji pilihan Indonesia. Dengan suasana yang nyaman dan harga terjangkau, warung ini menjadi tempat favorit untuk nongkrong dan berdiskusi.',
  location: 'Jl. Merdeka No. 123, Jakarta',
  image: '/images/warung-1.jpg',
  menu: [
    { id: '1', name: 'Kopi Hitam', price: 10000, image: '/images/kopi-1.jpg' },
    {
      id: '2',
      name: 'Kopi Susu',
      price: 15000,
      image: '/images/kopi-2.jpg',
    },
    { id: '3', name: 'Teh Tarik', price: 12000, image: '/images/teh-1.jpg' },
    {
      id: '4',
      name: 'Pisang Goreng',
      price: 10000,
      image: '/images/pisang-1.jpg',
    },
  ],
  events: [
    {
      id: 'event-1',
      title: 'Diskusi Blockchain',
      description: 'Diskusi santai tentang teknologi blockchain dan Web3',
      date: '2023-06-15T19:00:00',
      image: '/images/event-1.jpg',
    },
    {
      id: 'event-2',
      title: 'Workshop NFT',
      description: 'Belajar cara membuat dan menjual NFT',
      date: '2023-06-20T15:00:00',
      image: '/images/event-2.jpg',
    },
  ],
}

const WarungDetail = () => {
  const { id } = useParams()
  const { connected } = useWallet()
  const [selectedItems, setSelectedItems] = useState<
    { id: string; name: string; price: number; quantity: number }[]
  >([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transactionSuccess, setTransactionSuccess] = useState(false)

  const addToCart = (itemId: string, name: string, price: number) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((item) => item.id === itemId)
      if (existingItem) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { id: itemId, name, price, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((item) => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      } else {
        return prev.filter((item) => item.id !== itemId)
      }
    })
  }

  const getTotalPrice = () => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  const handleCheckout = () => {
    if (!connected) {
      alert('Silakan hubungkan wallet Anda terlebih dahulu')
      return
    }
    setShowCheckout(true)
  }

  const processTransaction = async () => {
    if (selectedItems.length === 0) return

    setIsProcessing(true)
    // Simulasi proses transaksi
    setTimeout(() => {
      setIsProcessing(false)
      setTransactionSuccess(true)
      // Reset setelah beberapa detik
      setTimeout(() => {
        setSelectedItems([])
        setShowCheckout(false)
        setTransactionSuccess(false)
      }, 3000)
    }, 2000)
  }

  if (!id) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img
            src={warungData.image}
            alt={warungData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-white">
            {warungData.name}
          </h1>
          <p className="text-light-muted mb-4">{warungData.fullDescription}</p>
          <div className="flex items-center text-light-gray mb-6">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {warungData.location}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {warungData.menu.map((item) => (
                <div
                  key={item.id}
                  className="border border-dark-border rounded-lg overflow-hidden flex bg-dark-medium hover:border-primary transition-all duration-200"
                >
                  <div className="relative h-24 w-24">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-white">{item.name}</h3>
                      <p className="text-light-gray text-sm">
                        Rp {item.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(item.id, item.name, item.price)}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      + Tambah
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Event Aktif
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warungData.events.map((event) => (
                <div
                  key={event.id}
                  className="border border-dark-border rounded-lg overflow-hidden bg-dark-medium"
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-white">
                      {event.title}
                    </h3>
                    <p className="text-light-gray text-sm mb-2">
                      {event.description}
                    </p>
                    <p className="text-light-gray text-sm">
                      {new Date(event.date).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-dark-light border-t border-dark-border p-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-white">
                  {selectedItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}{' '}
                  item
                </p>
                <p className="text-lg font-bold text-primary">
                  Rp {getTotalPrice().toLocaleString()}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="btn-primary py-2 px-6"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-dark-light border border-dark-border rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Checkout</h2>
            {!transactionSuccess ? (
              <>
                <div className="mb-4">
                  <h3 className="font-medium mb-2 text-white">Pesanan Anda:</h3>
                  <div className="border border-dark-border rounded-lg divide-y divide-dark-border">
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-3"
                      >
                        <div>
                          <p className="font-medium text-white">
                            {item.name} x {item.quantity}
                          </p>
                          <p className="text-light-gray text-sm">
                            Rp {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-light-gray hover:text-primary"
                          >
                            -
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            onClick={() =>
                              addToCart(item.id, item.name, item.price)
                            }
                            className="text-light-gray hover:text-primary"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-dark-border pt-4 mb-6">
                  <div className="flex justify-between mb-2 text-light-muted">
                    <span>Subtotal</span>
                    <span>Rp {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-white">
                    <span>Total</span>
                    <span>Rp {getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="border border-dark-border text-light-muted py-2 px-4 rounded-lg hover:bg-dark-medium"
                  >
                    Batal
                  </button>
                  {!connected ? (
                    <WalletMultiButton />
                  ) : (
                    <button
                      onClick={processTransaction}
                      disabled={isProcessing}
                      className={`btn-primary py-2 px-6 ${
                        isProcessing ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isProcessing ? 'Memproses...' : 'Bayar Sekarang'}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <svg
                  className="w-16 h-16 text-primary mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Transaksi Berhasil!
                </h3>
                <p className="text-light-muted mb-4">
                  Anda mendapatkan 10 Token NONGKI dan 1 NFT Warung Kopi Nongki.
                </p>
                <button
                  onClick={() => {
                    setSelectedItems([])
                    setShowCheckout(false)
                    setTransactionSuccess(false)
                  }}
                  className="btn-primary py-2 px-6"
                >
                  Kembali ke Warung
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default WarungDetail
