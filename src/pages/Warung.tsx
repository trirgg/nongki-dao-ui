import { useState, useEffect } from 'react'
import WarungList from '../components/WarungList'

// Dummy data untuk contoh
const warungData = [
  {
    id: 'warung-1',
    name: 'Warung Kopi Nongki',
    description:
      'Warung kopi lokal dengan suasana nyaman dan kopi berkualitas tinggi.',
    location: 'Jl. Merdeka No. 123, Jakarta',
    image: '/images/warung-1.jpg',
    activeEvents: 2,
  },
  {
    id: 'warung-2',
    name: 'Warung Mie Ayam Pak Budi',
    description: 'Mie ayam dan bakso dengan resep turun temurun sejak 1990.',
    location: 'Jl. Sudirman No. 45, Jakarta',
    image: '/images/warung-2.jpg',
    activeEvents: 1,
  },
  {
    id: 'warung-3',
    name: 'Angkringan Mas Joko',
    description:
      'Angkringan tradisional dengan berbagai makanan dan minuman sederhana.',
    location: 'Jl. Gatot Subroto No. 67, Jakarta',
    image: '/images/warung-3.jpg',
    activeEvents: 0,
  },
  {
    id: 'warung-4',
    name: 'Kedai Sate Madura',
    description: 'Sate Madura asli dengan bumbu kacang yang khas.',
    location: 'Jl. Thamrin No. 88, Jakarta',
    image: '/images/warung-4.jpg',
    activeEvents: 1,
  },
]

const Warung = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredWarung, setFilteredWarung] = useState(warungData)

  useEffect(() => {
    const results = warungData.filter(
      (warung) =>
        warung.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        warung.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredWarung(results)
  }, [searchTerm])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 text-white">
          Warung UMKM
        </h1>
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Cari warung atau lokasi..."
            className="input w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredWarung.length > 0 ? (
        <WarungList warungList={filteredWarung} />
      ) : (
        <div className="text-center py-12">
          <p className="text-light-gray text-lg">
            Tidak ada warung yang ditemukan.
          </p>
        </div>
      )}
    </div>
  )
}

export default Warung
