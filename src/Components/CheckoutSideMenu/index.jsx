import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleCheckout = () => {
        const date = new Date()

        const orderToAdd = {
            date:date.toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice:totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.setSearchByTitle(null)
    }

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] overflow-y-scroll`}
        
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Checkout</h2>
                <XMarkIcon 
                className="w-6 h-6 mr-2 cursor-pointer hover:text-red-600"
                onClick={() => context.closeCheckoutSideMenu()}
                ></XMarkIcon>
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light '>Total:</span>
                    <span className='font-medium text-2xl text-teal-600'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button
                className='bg-black py-1 text-white w-full rounded-lg'
                onClick={() => handleCheckout()}
                >Checkout</button>
                </Link>
            </div>
                {
                    context.cartProducts?.map((product) =>(
                    <OrderCard
                    key={product.id}
                    deleteProduct = {context.deleteProduct}
                    {...product}
                    />
                    ))
                }
            
        </aside>
    )
}


export {CheckoutSideMenu}