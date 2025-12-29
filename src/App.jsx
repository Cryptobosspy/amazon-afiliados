import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "./services/supabase"

import Home from "./pages/Home"
import Login from "./admin/Login"
import AdminPanel from "./admin/AdminPanel"

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if (loading) return null

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            session
              ? <Navigate to="/admin" />
              : <Login />
          }
        />

        <Route
          path="/admin"
          element={
            session
              ? <AdminPanel />
              : <Navigate to="/login" />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

