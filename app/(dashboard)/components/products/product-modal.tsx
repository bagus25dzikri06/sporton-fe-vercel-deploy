"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/modal"
import { Category, Product } from "@/app/types";
import { getAllCategories } from "@/app/services/category.service";
import Button from "@/app/(landing)/components/ui/button";
import ImageUploadPreview from "../ui/image-upload-preview";
import { createProduct, updateProduct } from "@/app/services/product.service";
import { toast } from "react-toastify";
import { getImageUrl } from "@/app/lib/api";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    product?: Product | null;
}

type ProductFormData = {
    name: string;
    price: number;
    stock: number;
    categoryId: string;
    description: string;
}

const ProductModal = ({isOpen, onClose, onSuccess, product} : TProductModalProps) => {
    const [category, setCategory] = useState<Category[]>([])
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: 0,
        stock: 0,
        categoryId: '',
        description: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const isEditMode = !!product

    const fetchData = async () => {
        try {
            const data = await getAllCategories()
            if (data) {
                setCategory(data)
            }
        } catch (error) {
            console.error('Failed to fetch categories', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {id, value} = e.target
        setFormData((prev) => ({
            ...prev, [id] : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const data = new FormData()
            data.append('name', formData.name)
            data.append('price', formData.price.toString())
            data.append('stock', formData.stock.toString())
            data.append('categoryId', formData.categoryId)
            data.append('description', formData.description)
            if (imageFile) {
                data.append('image', imageFile)
            }

            if (isEditMode) {
                await updateProduct(product._id, data)
            } else {
                if (
                    !formData.name ||
                    !formData.price ||
                    !formData.stock ||
                    !formData.categoryId ||
                    !formData.description || 
                    !imageFile
                ) {
                    alert('Please, fill in all fields!')
                    return
                }
                await createProduct(data)
            }

            setFormData({
                name: '',
                price: 0,
                stock: 0,
                categoryId: '',
                description: ''
            })
            setImageFile(null)
            setImagePreview(null)

            toast.success(isEditMode ? 'Product is updated successfully' : 'Product is created successfully')

            onSuccess?.()
            onClose?.()
        } catch (error) {
            console.error(
                isEditMode ? 'Failed to update product' : 'Failed to create product',
                error
            )
            toast.error(
                isEditMode ? 'Failed to update product' : 'Failed to create product'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        if (isEditMode && isOpen) {
            setFormData({
                name: product.name,
                price: product.price,
                description: product.description,
                categoryId: product.category._id,
                stock: product.stock
            })
            setImagePreview(product.imageUrl ? getImageUrl(product.imageUrl) : null)
        } else if (isOpen) {
            setFormData({
                name: '',
                price: 0,
                stock: 0,
                categoryId: '',
                description: ''
            })
            setImageFile(null)
            setImagePreview(null)
        }
    }, [isOpen, product])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? 'Edit Product' : 'Add New Product'}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex gap-7">
                    <div className="min-w-50">
                        <ImageUploadPreview label="Product Image" value={imagePreview} onChange={
                            (file) => {
                                setImageFile(file)
                                setImagePreview(URL.createObjectURL(file))
                            }
                        }/>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="productName">Product Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e. g. Running Shoes" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="input-group-admin">
                                <label htmlFor="price">Price (IDR)</label>
                                <input 
                                type="number" 
                                name="price" 
                                id="price" 
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0" />
                            </div>
                            <div className="input-group-admin">
                                <label htmlFor="stock">Stock</label>
                                <input 
                                type="number" 
                                name="stock" 
                                id="stock"
                                value={formData.stock}
                                onChange={handleChange} 
                                placeholder="0" />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="categoryId">Category</label>
                            <select name="categoryId" id="categoryId" value={formData.categoryId} onChange={handleChange}>
                                <option value="" disabled hidden>--Select Category--</option>
                                {
                                    category.map((data) => (
                                        <option value={data._id} key={data._id}>{data.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    rows={7} 
                    placeholder="Product Details..."
                    value={formData.description}
                    onChange={handleChange}
                    ></textarea>
                </div>
                <Button className="ml-auto mt-4 rounded-lg" onClick={handleSubmit} disabled={isSubmitting} type="submit">
                    {
                        isEditMode ? 'Update Product' : 'Create Product'
                    }
                </Button>
            </form>
        </Modal>
    )
}

export default ProductModal