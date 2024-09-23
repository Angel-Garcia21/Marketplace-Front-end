import { Link } from "react-router-dom"

export default function NewProduct() {
  return (
    <>
    <div className="flex justify-between">
        <h2 className="text-4xl font-black text-emerald-800"> Registrar Producto</h2>
        <Link
            to='/'
            className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white hover:bg-indigo-400"
            >
            Volver a Productos
        </Link>
    </div>
    </>
  )
}
