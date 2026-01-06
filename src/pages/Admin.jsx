import { useState } from "react"
import { supabase } from "../services/supabase"

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    image_url: "",
    price: "",
    badge: "",
    affiliate_url: ""
  })

  const [loading, setLoading] = useState(false)

  const saveProduct = async () => {
    if (!form.title || !form.affiliate_url) {
      alert("Título y link de afiliado son obligatorios")
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from("products")
      .insert([form])

    setLoading(false)

    if (error) {
      alert("Error al guardar producto")
      console.error(error)
    } else {
      alert("Producto guardado correctamente")
      setForm({
        title: "",
        image_url: "",
        price: "",
        badge: "",
        affiliate_url: ""
      })
    }
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h1>Panel Admin</h1>

      <input
        placeholder="Título del producto"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        placeholder="Image URL (Amazon)"
        value={form.image_url}
        onChange={(e) =>
          setForm({ ...form, image_url: e.target.value })
        }
      />

      <input
        placeholder="Precio (ej: USD 49.99)"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <input
        placeholder="Badge (Oferta / Top Ventas)"
        value={form.badge}
        onChange={(e) =>
          setForm({ ...form, badge: e.target.value })
        }
      />

      <input
        placeholder="Affiliate URL"
        value={form.affiliate_url}
        onChange={(e) =>
          setForm({ ...form, affiliate_url: e.target.value })
        }
      />

      <button onClick={saveProduct} disabled={loading}>
        {loading ? "Guardando..." : "Guardar producto"}
      </button>
    </div>
  )
}

