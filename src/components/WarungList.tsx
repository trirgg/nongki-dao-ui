import { Link } from 'react-router-dom'

interface Warung {
  id: string
  name: string
  description: string
  location: string
  image: string
  activeEvents: number
}

interface WarungListProps {
  warungList: Warung[]
}

const WarungList = ({ warungList }: WarungListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {warungList.map((warung) => (
        <Link to={`/warung/${warung.id}`} key={warung.id}>
          <div className="card hover:border-primary transition-all duration-300 cursor-pointer group">
            <div className="relative h-48 w-full">
              <img
                src={warung.image}
                alt={warung.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              {warung.activeEvents > 0 && (
                <div className="absolute top-3 right-3 bg-primary text-dark text-xs font-bold px-2 py-1 rounded-full">
                  {warung.activeEvents} Event Aktif
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-200">
                {warung.name}
              </h3>
              <p className="text-light-gray text-sm mb-3">
                {warung.description}
              </p>
              <div className="flex items-center text-light-gray text-sm">
                <svg
                  className="w-4 h-4 mr-1"
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
                {warung.location}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default WarungList
