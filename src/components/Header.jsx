import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Amazon Deals</span>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
