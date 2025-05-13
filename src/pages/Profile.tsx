import { useState } from 'react'
import { FiClock, FiImage } from 'react-icons/fi'

// Tipe data untuk user
interface User {
  id: string
  name: string
  username: string
  email: string
  walletAddress: string
  avatarUrl: string
  joinedDate: string
}

// Tipe data untuk transaksi
interface Transaction {
  id: string
  type: 'send' | 'receive' | 'mint' | 'stake'
  amount: number
  token: string
  timestamp: string
  status: 'completed' | 'pending' | 'failed'
  from?: string
  to?: string
}

// Tipe data untuk NFT
interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
  acquiredDate: string
  rarity?: string
}

// Dummy data
const dummyUser: User = {
  id: 'user-123',
  name: 'Satoshi Nakamoto',
  username: 'satoshi',
  email: 'satoshi@example.com',
  walletAddress: '0x1234...5678',
  avatarUrl: 'https://i.pravatar.cc/150?img=3',
  joinedDate: '2023-01-15',
}

const dummyTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'receive',
    amount: 0.5,
    token: 'ETH',
    timestamp: '2025-05-10T14:30:00Z',
    status: 'completed',
    from: '0xabcd...1234',
    to: dummyUser.walletAddress,
  },
  {
    id: 'tx-2',
    type: 'mint',
    amount: 1,
    token: 'NONGKI-NFT',
    timestamp: '2025-05-08T09:15:00Z',
    status: 'completed',
  },
  {
    id: 'tx-3',
    type: 'send',
    amount: 100,
    token: 'NONGKI',
    timestamp: '2025-05-05T18:45:00Z',
    status: 'completed',
    from: dummyUser.walletAddress,
    to: '0xefgh...5678',
  },
  {
    id: 'tx-4',
    type: 'stake',
    amount: 200,
    token: 'NONGKI',
    timestamp: '2025-04-28T11:20:00Z',
    status: 'completed',
  },
  {
    id: 'tx-5',
    type: 'send',
    amount: 0.1,
    token: 'ETH',
    timestamp: '2025-04-20T16:10:00Z',
    status: 'failed',
    from: dummyUser.walletAddress,
    to: '0xijkl...9012',
  },
]

const dummyNFTs: NFT[] = [
  {
    id: 'nft-1',
    name: 'Nongki Hangout #42',
    imageUrl: 'https://picsum.photos/300/300?random=1',
    collection: 'Nongki Hangout',
    acquiredDate: '2025-05-08',
    rarity: 'Rare',
  },
  {
    id: 'nft-2',
    name: 'Nongki Cafe #17',
    imageUrl: 'https://picsum.photos/300/300?random=2',
    collection: 'Nongki Places',
    acquiredDate: '2025-04-15',
    rarity: 'Common',
  },
  {
    id: 'nft-3',
    name: 'Nongki Founder Pass',
    imageUrl: 'https://picsum.photos/300/300?random=3',
    collection: 'Nongki DAO Membership',
    acquiredDate: '2025-03-22',
    rarity: 'Legendary',
  },
  {
    id: 'nft-4',
    name: 'Nongki Event #3',
    imageUrl: 'https://picsum.photos/300/300?random=4',
    collection: 'Nongki Events',
    acquiredDate: '2025-02-10',
    rarity: 'Uncommon',
  },
]

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'transactions' | 'nfts'>(
    'transactions'
  )

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Format timestamp to be more readable
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Get transaction icon based on type
  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return '↑'
      case 'receive':
        return '↓'
      case 'mint':
        return '★'
      case 'stake':
        return '⚓'
      default:
        return '•'
    }
  }

  // Get transaction color based on type
  const getTransactionColor = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return 'text-red-500'
      case 'receive':
        return 'text-green-500'
      case 'mint':
        return 'text-purple-500'
      case 'stake':
        return 'text-blue-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={dummyUser.avatarUrl}
            alt={dummyUser.name}
            className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {dummyUser.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              @{dummyUser.username}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {dummyUser.walletAddress}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Bergabung sejak {formatDate(dummyUser.joinedDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'transactions'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('transactions')}
        >
          <div className="flex items-center">
            <FiClock className="mr-2" />
            Riwayat Transaksi
          </div>
        </button>
        <button
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'nfts'
              ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('nfts')}
        >
          <div className="flex items-center">
            <FiImage className="mr-2" />
            NFT Collection
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {activeTab === 'transactions' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Riwayat Transaksi
            </h2>
            {dummyTransactions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Tipe
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Jumlah
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Waktu
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {dummyTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span
                              className={`mr-2 text-lg ${getTransactionColor(
                                transaction.type
                              )}`}
                            >
                              {getTransactionIcon(transaction.type)}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white capitalize">
                              {transaction.type}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-900 dark:text-white">
                            {transaction.amount} {transaction.token}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {formatTimestamp(transaction.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              transaction.status === 'completed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : transaction.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {transaction.from && transaction.to && (
                            <>
                              <div>From: {transaction.from}</div>
                              <div>To: {transaction.to}</div>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Belum ada transaksi.
              </p>
            )}
          </div>
        )}

        {activeTab === 'nfts' && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              NFT Collection
            </h2>
            {dummyNFTs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyNFTs.map((nft) => (
                  <div
                    key={nft.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={nft.imageUrl}
                      alt={nft.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {nft.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {nft.collection}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            nft.rarity === 'Legendary'
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                              : nft.rarity === 'Rare'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : nft.rarity === 'Uncommon'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                          }`}
                        >
                          {nft.rarity}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(nft.acquiredDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Belum memiliki NFT.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
