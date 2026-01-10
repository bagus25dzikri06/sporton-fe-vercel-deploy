"use client"

import { useState } from "react"
import OrderConfirmed from "../../components/order-status/order-confirmed"
import OrderSubmitted from "../../components/order-status/order-submitted"

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    return <main className="bg-gray-100 min-h-[80vh]">
        <div className="max-w-5xl mx-auto pt-15 pb-10">
            <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
        </div>
        <div className="grid place-items-center gap-14 pb-20 px-25">
            {
                isConfirmed ? (<OrderConfirmed />) : (<OrderSubmitted />)
            }
        </div>
    </main>
}

export default OrderStatus