import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./admin/Login"

function Home() {
  return <h1>HOME</h1>
}

function Admin() {
  return <h1>ADMIN</h1>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

