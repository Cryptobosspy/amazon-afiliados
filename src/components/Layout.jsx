import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", padding: 20 }}>
      <header style={{ marginBottom: 20 }}>
        <strong>HEADER</strong>
      </header>

      <Outlet />

      <footer style={{ marginTop: 40 }}>
        <small>
          Como afiliado de Amazon, percibo ingresos por compras elegibles.
        </small>
      </footer>
    </div>
  )
}

