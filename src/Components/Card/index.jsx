import { useContext } from "react";
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Card = ({category, description,id, image, price, rating, title}) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.isCheckoutSideMenuOpen && context.closeCheckoutSideMenu()
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (product) => {
        context.setCount(context.count + 1)
        const oldCartProducts = [...context.cartProducts]
        const productIndex = oldCartProducts.findIndex(
            oldProduct => oldProduct.id === product.id
        )
        if (productIndex === -1 ) {
            product.quantity = 1
            product.finalPrice = price
            context.setCartProducts([...oldCartProducts, product])
        } else {
            oldCartProducts[productIndex].quantity += 1
            oldCartProducts[productIndex].finalPrice = product.price * oldCartProducts[productIndex].quantity
            context.setCartProducts(oldCartProducts)
        }
    }

    return(
        <div className='bg-white w-56 h-60 rounded-lg mb-10 ml-8'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img 
                className='w-full h-full object-scale-down rounded-lg truncate text-ellipsis cursor-pointer' src={image} alt='headphones' 
                onClick={() => showProduct(
                    {
                        title:title,
                        category:category,
                        image:image,
                        description:description,
                        price:price,
                    }
                )}
                />
                
                <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 select-none cursor-pointer hover:bg-cyan-400'
                onClick={() => addProductsToCart(
                    {
                        id:id,
                        title:title,
                        category:category,
                        image:image,
                        description:description,
                        price:price,
                    }
                )}
                >
                    <PlusIcon 
                    className="w-6 h-6"
                    ></PlusIcon>
                </div>
            </figure>
            <p className=' flex justify-between'>
                <span className='text-sm font-light self-center pr-2.5'>
                    {title.length > 30 ? title.slice(0,45)+'...' : title}
                </span>
                <span className=' text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
}

export {Card}