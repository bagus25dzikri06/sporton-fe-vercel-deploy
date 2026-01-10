import CartItems from "../components/checkout/cart-items"
import OrderInformation from "../components/checkout/order-information"

const Checkout = () => {
    return <main className="bg-gray-100 min-h-[80vh]">
        <div className="max-w-5xl mx-auto pt-15 pb-10">
            <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        </div>
        <div className="grid grid-cols-2 gap-14 pb-20 px-25">
            <OrderInformation />
            <CartItems />
        </div>
    </main>
}

export default Checkout