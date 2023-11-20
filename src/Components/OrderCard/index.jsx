import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

const OrderCard = ({id,image, title, price, quantity, finalPrice, deleteProduct}) => {

    let renderXMarkIcon
    if (deleteProduct){
        renderXMarkIcon = <XMarkIcon 
            className="w-6 h-6 mr-2 cursor-pointer hover:text-red-600"
            onClick={() => deleteProduct(id)}
        />
    }

    return (
        <div className="p-4 h-[120px] flex flex-row shadow-md">
            <figure className="w-1/6">
                <img 
                className="w-full h-full rounded-lg object-scale-down"
                src={image} 
                alt={title} />
            </figure>
            <span className="w-4/6 p-3  flex flex-col space-y-1">
                <div className="text-sm">
                {title.length > 30 ? title.slice(0,45)+'...' : title}
                </div>
                <div className=" font-medium">{quantity} x ${price}</div>
            </span>
            <div
            className="w-1/6 self-center font-bold"
            >
                ${finalPrice}
            </div>
            {renderXMarkIcon}
        </div>
    )
}



export {OrderCard}