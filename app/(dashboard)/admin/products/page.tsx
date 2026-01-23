"use client";

import Button from "@/app/(landing)/components/ui/button"
import { FiPlus } from "react-icons/fi"
import ProductTable from "../../components/products/product-table"
import { deleteProduct, getAllProducts } from "@/app/services/product.service"
import ProductModal from "../../components/products/product-modal"
import { Suspense, useEffect, useState } from "react"
import { Product } from "@/app/types";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

const ProductManagement = () => {
    const [products, setProduct] = useState<Product[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [productToDeleteID, setProductToDeleteID] = useState('')
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null)
    }

    const fetchData = async () => {
        try {
            const data = await getAllProducts()
            if (data) {
                setProduct(data)
            }
        } catch (error) {
            console.error('Failed to fetch products', error)
        }
    }

    const handleEdit = (product: Product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const handleDelete = (id: string) => {
        setProductToDeleteID(id)
        setIsDeleteModalOpen(true)
    }

    const handleDeleteConfirm = async () => {
        if (!productToDeleteID) {
            return
        }
        try {
            await deleteProduct(productToDeleteID)
            fetchData()
            toast.success('Product is deleted successfully')
            setIsDeleteModalOpen(false)
            setProductToDeleteID('')
        } catch(error) {
            console.error('Failed to delete product', error)
            toast.error('Failed to delete product')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="text-gray-500">Manage your inventory, prices and stock.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
                    <FiPlus size={24} />Add Product
                </Button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
            </Suspense>
            <ProductModal product={selectedProduct} onSuccess={fetchData} isOpen={isModalOpen} onClose={handleCloseModal} />
            <DeleteModal 
            isOpen={isDeleteModalOpen} 
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleDeleteConfirm} />
        </div>
    )
}

export default ProductManagement