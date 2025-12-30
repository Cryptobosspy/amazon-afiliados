import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="font-bold text-lg">
          TopOfertas
        </Link>

        <nav className="text-sm text-gray-600 flex gap-4">
          <Link to="/">Inicio</Link>
          <Link to="/login">Admin</Link>
        </nav>

      </div>
    </header>
  )
}

