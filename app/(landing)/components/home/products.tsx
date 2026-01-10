import Link from "next/link"
import Image from "next/image"
import { FiPlus } from "react-icons/fi"
import Button from "../ui/button"
import PriceFormatter from "@/app/utils/price-formatter"

const productList = [
    {
        id : "97e5cdf6-5eb1-4f72-972e-5a4e211a9c32",
        name : "SportsOn Hyperfast Shoes",
        category : "Running",
        price : 329000,
        imgUrl : "product-3.png"
    },
    {
        id : "31eb2f07-a55e-4880-9b42-6ec3a231a071",
        name : "SportsOn Rockets Tennis",
        category : "Tennis",
        price : 999000,
        imgUrl : "product-2.png"
    },
    {
        id : "8c85ce22-346a-4dd6-a028-83b9b9e91d6e",
        name : "SportsOn Slowlivin",
        category : "Running",
        price : 119000,
        imgUrl : "product-1.png"
    },
    {
        id : "1d39978f-36b4-4a1b-b504-5d0b8dd4957a",
        name : "SportsOn HyperSoccer v2",
        category : "Football",
        price : 458000,
        imgUrl : "product-4.png"
    },
    {
        id : "3e706328-036e-406a-acae-c2c1c6302b73",
        name : "SportsOn HyperSoccer v2",
        category : "Football",
        price : 458000,
        imgUrl : "product-4.png"
    },
    {
        id : "b79f2dc2-c3ed-4b44-8c78-265f1d277c18",
        name : "SportsOn Slowlivin",
        category : "Running",
        price : 119000,
        imgUrl : "product-5.png"
    },
    {
        id : "fbfbfe39-aa37-496c-bf4a-c7a6d6cfe9b6",
        name : "SportsOn Hyperfast Shoes",
        category : "Running",
        price : 329000,
        imgUrl : "product-3.png"
    },
    {
        id : "abb4bfaa-f8b3-4789-b91f-de22e95baa15",
        name : "SportsOn Rockets Tennis",
        category : "Tennis",
        price : 999000,
        imgUrl : "product-2.png"
    }
]

const ProductsSection = () => {
    return <section id="products-section" className="container mx-auto mt-32 mb-52">
        <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR</span> PRODUCTS
        </h2>
        <div className="grid grid-cols-4 gap-5">
            {
                productList.map((product, index) => (
                    <Link href={`/product/${product.id}`} key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                        <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                            <Image 
                            src={`/images/products/${product.imgUrl}`} 
                            alt={product.name} 
                            width={300} 
                            height={300} 
                            className="aspect-square object-contain" />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                        </div>
                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.category}</div>
                            <div className="font-medium text-primary">{PriceFormatter(product.price)}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </section>
}

export default ProductsSection