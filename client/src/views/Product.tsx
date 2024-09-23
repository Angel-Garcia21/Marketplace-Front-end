import { Link } from "react-router-dom"

export default function Product() {
  return (
    <>
    <div className="flex justify-between">
        <h2 className="text-4xl font-black text-emerald-800">Productos</h2>
        <Link
            to='productos/nuevo'
            className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white hover:bg-indigo-400"
            >
            Agregar Producto
        </Link>
    </div>
    </>
  )
}
