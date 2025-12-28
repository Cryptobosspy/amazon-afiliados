import Home from "./pages/Home"
import Footer from "./components/Footer"
import LanguageSwitcher from "./components/LanguageSwitcher"

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-4 py-4 flex justify-end">
        <LanguageSwitcher />
      </header>

      <Home />
      <Footer />
    </>
  )
}

