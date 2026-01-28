"use client";

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionProps = {
    product: Product;
    stock: number;
}

const ProductActions = ({ product, stock }: TProductActionProps) => {
    const {items, addItem} = useCartStore()
    const {push} = useRouter()
    const [qty, setQty] = useState(0)
    const handleAddToCart = () => {
        if (qty === 0) {
            alert('Please, fill in the quantity of the products you want to buy')
            return
        }
        addItem(product, qty)
    }
    const checkout = () => {
        if (items.length === 0) {
            alert('Your shopping must not be empty before checking out')
            return
        }
        push("/checkout")
    }

    return (
        <div className="flex gap-5">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                    <span className="border-r">{qty}</span>
                    <div className="flex flex-col">
                        <button 
                            className="border-b border-t border-gray-500 cursor-pointer h-3/4 aspect-square flex items-center justify-center"
                            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
                        >
                            <FiChevronUp />
                        </button>
                        <button 
                            className="border-b cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                        >
                            <FiChevronDown />
                        </button>
                    </div>
                </div>
            </div>
            <Button className="px-20 w-full rounded-lg" onClick={handleAddToCart}>
                <FiShoppingBag size={24} /> Add to Cart
            </Button>
            <Button variant="dark" className="px-20 w-full rounded-lg" onClick={checkout}>
                Checkout Now <FiArrowRight size={24} />
            </Button>
        </div>
    )
}

export default ProductActions;