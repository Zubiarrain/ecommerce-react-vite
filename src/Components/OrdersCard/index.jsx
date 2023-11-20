import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({totalPrice, totalProducts, date}) => {

    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg  p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className=" font-light">{date}</span>
                    <span className=" font-light">{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="w-6 h-6 mr-2 cursor-pointer hover:text-cyan-600" />
                </p>
            </div>
        </div>
    )
}



export {OrdersCard}