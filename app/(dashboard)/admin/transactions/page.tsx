"use client";

import { Suspense, useState } from "react"
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";

const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    const handleViewDetails = () => {
        setIsOpen(true)
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Transactions</h1>
                    <p className="opacity-50">Verify incoming payments and manage orders.</p>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <TransactionTable onViewDetails={handleViewDetails} />
            </Suspense>
            <TransactionModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default TransactionManagement