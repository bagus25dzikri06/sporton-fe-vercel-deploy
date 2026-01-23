type UUID = string;

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

export interface Category {
    _id: UUID;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    _id: UUID;
    name: string;
    description: string;
    category: Category;
    stock: number;
    price: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Bank {
    _id: UUID;
    bankName: string;
    accountName: string;
    accountNumber: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Transaction {
    _id: UUID;
    paymentProof: string;
    status: 'pending' | 'paid' | 'rejected',
    purchasedItems: {
        productId: Product;
        qty: string;
    }[],
    totalPayment: string;
    customerName : string;
    customerContact: string;
    customerAddress : string;
    createdAt: Date;
    updatedAt: Date;
}