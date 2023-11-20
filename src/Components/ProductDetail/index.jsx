import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] overflow-y-scroll`}
        
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <XMarkIcon 
                className="w-6 h-6 mr-2 cursor-pointer hover:text-red-600"
                onClick={() => context.closeProductDetail()}
                ></XMarkIcon>
            </div>
            <figure className='px-6 h-1/4'>
                <img 
                className='w-full h-full rounded-lg object-scale-down'
                src={context.productToShow.image}
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-4'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}


export {ProductDetail}