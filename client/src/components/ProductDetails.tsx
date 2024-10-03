import { Product } from "../types"
import { formatCurrency } from "../util"

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {

    
  return (
    <div>
        <tr className="border-b">
            <td className="p-3 texto-lg texto-gris-800">
                {product.name}
            </td>
            <td className="p-3 texto-lg texto-gris-800">
                {formatCurrency (product.price)}
            </td>
            <td className="p-3 texto-lg texto-gris-800">
                
            </td>
            <td className="p-3 texto-lg texto-gris-800">

            </td>
        </tr>
    </div>
  )
}
