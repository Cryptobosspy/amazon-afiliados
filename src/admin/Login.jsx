import { useState } from "react"
import { supabase } from "../services/supabase"

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (!error) onLogin()
    else alert("Login incorrecto")
  }

  return (
    <main className="max-w-sm mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 w-full mb-4"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="amazon-btn w-full" onClick={handleLogin}>
        Entrar
      </button>
    </main>
  )
}
