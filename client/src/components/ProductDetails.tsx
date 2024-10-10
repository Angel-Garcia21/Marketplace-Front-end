import { deleteProduct } from "../services/ProductService"
import { Product } from "../types"
import { formatCurrency } from "../util"
import { useNavigate, ActionFunctionArgs, Form, redirect, useFetcher} from "react-router-dom"


type ProductDetailsProps = {
    product: Product
}

export async function action ({params}: ActionFunctionArgs) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }
   
}

export default function ProductDetails({product}: ProductDetailsProps) {
    const fetcher = useFetcher()
    const getProductAvailability = product.availability
    const navigate = useNavigate()


  return (
        <tr className="border-b">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency (product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="post">
                    <button 
                    type="submit"
                    name="id"
                    value={+product.id}
                    className={`${getProductAvailability? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black hover:cursor-pointer shadow-lg  ` }
                    >
                    {getProductAvailability? 'Disponible' : 'Agotado'} 
                    </button>
                    <input type="hidden" name='id' value={product.id} />
                        
                </fetcher.Form>
            </td>

            <td className="p-3 text-lg text-gray-800">
                <div className="flex gap-2 items-center">
                    <button 
                    onClick={ () => navigate(`/productos/${product.id}/edit`)}
                    className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">Editar
                    </button>

                    <Form  
                        className="w-full" 
                        method="post" 
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if(!confirm('¿Eliminar?')) {
                                e.preventDefault()

                            }
                        }}
                        >
                    
                        <input
                        type="submit"
                        value='Eliminar'
                        className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer hover:shadow-2xl">
                        </input>
                    </Form>
                </div>
            </td>
        </tr>

  )
}
