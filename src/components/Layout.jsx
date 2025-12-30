import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
