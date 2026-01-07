import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error) setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addProduct = async (product) => {
    await supabase.from("products").insert(product)
    fetchProducts()
  }

  const updateProduct = async (id, updates) => {
    await supabase.from("products")
      .update(updates)
      .eq("id", id)

    fetchProducts()
  }

  const deleteProduct = async (id) => {
    const confirm = window.confirm("¿Eliminar este producto?")
    if (!confirm) return

    await supabase.from("products")
      .delete()
      .eq("id", id)

    fetchProducts()
  }

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct
  }
}

