import { useContext } from "react"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from 'react-router-dom'

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
      <>
      <h2 className="font-medium text-xl mb-5">My Orders</h2>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                date={order.date}
                />
            </Link>
          ))
        }
      </>
    )
  }
  
  export {MyOrders}
  