import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from("products").select("*")
      .then(({ data }) => setProducts(data || []))
  }, [])

  return { products }
}
