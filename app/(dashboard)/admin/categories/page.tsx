"use client";

import Button from "@/app/(landing)/components/ui/button"
import { getAllCategories } from "@/app/services/category.service"
import { Category } from "@/app/types"
import { Suspense, useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import CategoryTable from "../../components/categories/category-table"
import CategoryModal from "../../components/categories/category-modal";

const CategoryManagement = () => {
    const [categories, setCategory] = useState<Category[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    
    useEffect(() => {
        async function fetchData() {
            const data = await getAllCategories()
            setCategory(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Category Management</h1>
                    <p className="opacity-50">Organize your products into categories.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />Add Category
                </Button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <CategoryTable categories={categories} />
            </Suspense>
            <CategoryModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default CategoryManagement