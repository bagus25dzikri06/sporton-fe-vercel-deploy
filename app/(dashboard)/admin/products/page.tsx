"use client";

import Button from "@/app/(landing)/components/ui/button"
import { FiPlus } from "react-icons/fi"
import ProductTable from "../../components/products/product-table"
import { getAllProducts } from "@/app/services/product.service"
import ProductModal from "../../components/products/product-modal"
import { Suspense, useEffect, useState } from "react"
import { Product } from "@/app/types";

const ProductManagement = () => {
    const [products, setProduct] = useState<Product[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        async function fetchData(){
            const data = await getAllProducts()
            setProduct(data)
        }

        fetchData()
    }, [])
    
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Manage your inventory, prices and stock.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />Add Product
                </Button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductTable products={products} />
            </Suspense>
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default ProductManagement