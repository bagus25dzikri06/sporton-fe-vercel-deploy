import PriceFormatter from "@/app/utils/price-formatter"
import { FiEye } from "react-icons/fi"

const transactions = [
    {
        createdAt: '23/02/2026 19:32',
        customerName: 'John Doe',
        customerContact: '08231223123',
        totalPayment: 450000,
        status: 'PENDING'
    },
    {
        createdAt: '23/02/2026 13:32',
        customerName: 'Delon Marx',
        customerContact: '08823291231',
        totalPayment: 753000,
        status: 'PAID'
    },
    {
        createdAt: '23/02/2026 19:32',
        customerName: 'Delon Marx',
        customerContact: '08823291231',
        totalPayment: 753000,
        status: 'REJECTED'
    }
]

type TTransactionTableProps = {
    onViewDetails: () => void;
}

const TransactionTable = ({ onViewDetails } : TTransactionTableProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">{data.createdAt}</td>
                                <td className="px-6 py-4 font-medium">{data.customerName}</td>
                                <td className="px-6 py-4 font-medium">{data.customerContact}</td>
                                <td className="px-6 py-4 font-medium">{PriceFormatter(data.totalPayment)}</td>
                                <td className="px-6 py-4 font-medium">
                                    {
                                        data.status.toLowerCase() === 'pending' && (
                                            <div className="px-2 py-1 rounded-full border text-center bg-yellow-100 text-yellow-600 border-yellow-200">
                                                {data.status}
                                            </div>
                                        )
                                    }
                                    {
                                        data.status.toLowerCase() === 'paid' && (
                                            <div className="px-2 py-1 rounded-full border text-center bg-green-100 text-green-600 border-green-200">
                                                {data.status}
                                            </div>
                                        )
                                    }
                                    {
                                        data.status.toLowerCase() === 'rejected' && (
                                            <div className="px-2 py-1 rounded-full border text-center bg-red-100 text-red-600 border-red-200">
                                                {data.status}
                                            </div>
                                        )
                                    }
                                </td>
                                <td className="px-6 py-7.5 self-center flex items-center gap-3 text-gray-600">
                                    <button onClick={onViewDetails} className="flex gap-2">
                                        <FiEye size={20} /> View Details
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable