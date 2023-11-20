import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPanth = window.location.pathname
  let index = currentPanth.substring(currentPanth.lastIndexOf('/') + 1)

  if (index == 'last'){
    index = context.order?.length - 1
  }else {

  }
  

    return (
      <>
        <div className="flex items-center justify-center w-80 relative">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon 
            className="w-6 h-6 mr-2 cursor-pointer hover:text-cyan-600"
            ></ChevronLeftIcon>
          </Link>
          
          <h1>My Order</h1>

        </div>
        <div className="flex flex-col w-80">
        {
            context.order?.[index]?.products.map(product =>(
            <OrderCard
            key={product.id}
            {...product}
            />
            ))
        }
      </div>
      </>
      
    )
  }
  
  export {MyOrder}
  