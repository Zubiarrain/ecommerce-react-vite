import { useContext } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)
  const currentPanth = window.location.pathname
  let index = currentPanth.substring(currentPanth.lastIndexOf('/') + 1)

  const renderItems = (items) => {
    return(
      items?.map((item) =>(
        <Card
        key={item.id}
        {...item}
        />
      ))
    )
  }

  const renderView = () => {

    if(context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0) {
        return (renderItems(context.filteredItems))
      } else {
        return (
          <div>
            We don't have anything :(
          </div>
        )
      }
    }else {
      let filteredItemsByCategory = context.items
      if (index === 'mens-clothing'){
        filteredItemsByCategory = context.items.filter(item => item.category === "men's clothing")
      } else if (index === 'womens-clothing'){
        filteredItemsByCategory = context.items.filter(item => item.category === "women's clothing")
      } else if (index === 'jewelery'){
        filteredItemsByCategory = context.items.filter(item => item.category === "jewelery")
      } else if (index === 'electronics'){
        filteredItemsByCategory = context.items.filter(item => item.category === "electronics")
      }
      return (renderItems(filteredItemsByCategory))
    }

  }

  return (
    <>
      <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
      <input 
      className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none text-stone-600"
      type="text" 
      placeholder="Search a product" 
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div 
      //className='grid gap-4 grid-cols-4 w-full max-w-screen-lg flex-wrap'
      className='flex flex-row flex-wrap w-full max-w-screen-lg justify-center items-center'
      >
      {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu/>
      
    </>
  )
}

export {Home}
