/* 
This function calculate total price of a new order

@params {Array} products cartProducts: Array of Objects
@returns {number} Total price
*/
export const totalPrice = (products) => {
    const finalPrices = products.map(
                            product => product.finalPrice
                        )
    const finalPrice = finalPrices.reduce((accumulator, currentValue) => accumulator + currentValue,0)
    return finalPrice.toFixed(2)
}