import { useState } from "react"
import { supabase } from "../services/supabase"

export default function AdminPanel() {
  const [form, setForm] = useState({
    title: "",
    image: "",
    price: "",
    badge: "",
    affiliate_url: ""
  })

  const addProduct = async () => {
    const { error } = await supabase.from("products").insert(form)
    if (error) alert(error.message)
    else {
      alert("Producto añadido")
      setForm({ title: "", image: "", price: "", badge: "", affiliate_url: "" })
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Panel de Afiliados</h1>

      {Object.keys(form).map(key => (
        <input
          key={key}
          className="border p-2 w-full mb-2"
          placeholder={key}
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button className="amazon-btn w-full" onClick={addProduct}>
        Guardar producto
      </button>
    </main>
  )
}
