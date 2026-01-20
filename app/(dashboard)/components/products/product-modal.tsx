"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/modal"
import { Category } from "@/app/types";
import { getAllCategories } from "@/app/services/category.service";
import Button from "@/app/(landing)/components/ui/button";
import ImageUploadPreview from "../ui/image-upload-preview";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal = ({isOpen, onClose} : TProductModalProps) => {
    const [category, setCategory] = useState<Category[]>([])
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            const data = await getAllCategories()
            setCategory(data)
        }

        fetchData()
    }, [])

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
            <div className="flex flex-col gap-6">
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
                            <input type="text" name="productName" id="productName" placeholder="e. g. Running Shoes" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="input-group-admin">
                                <label htmlFor="price">Price (IDR)</label>
                                <input type="number" name="price" id="rice" placeholder="0" />
                            </div>
                            <div className="input-group-admin">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" name="stock" id="stock" placeholder="0" />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category">
                                <option value="" disabled>Select Category</option>
                                {
                                    category.map((data) => (
                                        <option value={data.name}  key={data._id}>{data.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={7} placeholder="Product Details..."></textarea>
                </div>
                <Button className="ml-auto mt-4 rounded-lg">Create Product</Button>
            </div>
        </Modal>
    )
}

export default ProductModal