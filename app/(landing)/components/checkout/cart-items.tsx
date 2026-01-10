"use client";

import PriceFormatter from "@/app/utils/price-formatter"
import Image from "next/image"
import Button from "../ui/button"
import { cartList, totalPrice } from "../ui/cart-popup"
import { FiCreditCard, FiTrash2 } from "react-icons/fi"
import CardWithHeader from "../ui/card-with-header"
import { useRouter } from "next/navigation"

const CartItems = () => {
    const {push} = useRouter()
    const payment = () => {
        push("/payment")
    }
    return <CardWithHeader title="Cart Items">
        <div className="overflow-auto max-h-[300px]">
            {
                cartList.map((item, index) => (
                    <div className="border border-gray-200 p-4 flex gap-3" key={index}>
                        <div className="bg-primary-alternate aspect-square w-16 flex justify-center items-center">
                            <Image 
                            src={`/images/products/${item.imgUrl}`} 
                            width={63} 
                            height={63} 
                            alt={item.name} 
                            className="aspect-square object-contain"/>
                        </div>
                        <div className="self-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div>{item.qty}x</div>
                                <div className="text-primary">{PriceFormatter(item.price)}</div>
                            </div>
                        </div>
                        <Button size="small" variant="ghost" className="w-7 h-7 p-0 self-center ml-auto">
                            <FiTrash2 />
                        </Button>
                    </div>
                ))
            }
        </div>
        <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between font-semibold">
                <div className="text-sm">Total</div>
                <div className="text-primary text-xs">{PriceFormatter(totalPrice)}</div>
            </div>
            <Button variant="dark" size="small" className="w-full mt-4" onClick={payment}>
                <FiCreditCard /> Proceed to Payment
            </Button>
        </div>
    </CardWithHeader>
}

export default CartItems