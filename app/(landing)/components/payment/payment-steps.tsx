"use client";

import PriceFormatter from "@/app/utils/price-formatter"
import CardWithHeader from "../ui/card-with-header"
import { totalPrice } from "../ui/cart-popup"
import FileUpload from "../ui/file-upload"
import Button from "../ui/button"
import { FiCheckCircle } from "react-icons/fi"
import { useRouter } from "next/navigation"

const PaymentSteps = () => {
    const {push} = useRouter()
    const uploadAndConfirm = () => {
        push("/order-status/1231231")
    }
    return <CardWithHeader title="Payment Steps">
        <div className="p-5">
            <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
                <li>Transfer the total amount of <b>{PriceFormatter(totalPrice)}</b> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or SMBC Indonesia).</li>
                <li>After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.</li>
                <li>Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.</li>
            </ol>
            <FileUpload />
        </div>
        <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between font-semibold">
                <div className="text-sm">Total</div>
                <div className="text-primary text-xs">{PriceFormatter(totalPrice)}</div>
            </div>
            <Button variant="dark" size="small" className="w-full mt-4" onClick={uploadAndConfirm}>
                <FiCheckCircle /> Upload Receipt & Confirm
            </Button>
        </div>
    </CardWithHeader>
}

export default PaymentSteps