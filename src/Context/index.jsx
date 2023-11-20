import { createContext, useState, useEffect } from "react";
import { apiUrl } from '../Api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen]  = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail . Show product
    const [productToShow, setProductToShow]  = useState({})

    // Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]  = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Shopping Cart . Increment quantity
    const [count, setCount]  = useState(0)

    // ShoppingCart . Add products to cart
    const [cartProducts, setCartProducts]  = useState([])

    // ShoppingCart . Order
    const [order, setOrder]  = useState([])

    // ShoppingCart . delete product
    const deleteProduct = (id) =>{
        const filteredProdcuts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProdcuts)
        setCount(filteredProdcuts.length)
    }

    // Get products
    const [items, setItems]  = useState(null)
    const [filteredItems, setFilteredItems]  = useState(null)
    
    // Get products by title
    const [searchByTitle, setSearchByTitle]  = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/products`)
            const data = await response.json()
            setItems(await data)
          } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
          }
        }
        fetchData()
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items,searchByTitle])


      /* 
      ["men's clothing", 'jewelery', 'electronics', "women's clothing"]
      */

    return(
        <ShoppingCartContext.Provider
        value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            deleteProduct,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}
        >
            {children}    
        </ShoppingCartContext.Provider>
    )
}