"use client";

import Button from "@/app/(landing)/components/ui/button"
import { FiPlus } from "react-icons/fi"
import BankInfoList from "../../components/bank-info/bank-info-list"
import { Suspense, useEffect, useState } from "react"
import BankInfoModal from "../../components/bank-info/bank-info-modal";
import { Bank } from "@/app/types";
import { getAllBanks } from "@/app/services/bank.service";

const BankInfo = () => {
    const [banks, setBank] = useState<Bank[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getAllBanks()
            setBank(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Bank Information</h1>
                    <p className="opacity-50">Manage destination accounts for customer transfers.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />Add Bank Account
                </Button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <BankInfoList banks={banks} />
            </Suspense>
            <BankInfoModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default BankInfo