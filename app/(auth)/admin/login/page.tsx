"use client";

import Button from "@/app/(landing)/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    const { push } = useRouter()
    return (
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-[72px]">
                <Image 
                src="/images/logo-admin.svg" 
                alt="logo admin" 
                width={304} 
                height={51} 
                className="mx-auto mb-4" />
                <p className="opacity-50 text-sm text-center">Enter your credentials to access the dashboard</p>
                <div className="input-group-admin py-2">
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input type="email" name="email" id="email" placeholder="admin@store.com" />
                </div>
                <div className="input-group-admin py-2">
                    <label htmlFor="password" className="font-bold">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••••••••••••••" />
                </div>
                <Button className="ml-auto mt-4 rounded-lg w-full" onClick={() => push('/admin/products')}>Sign In</Button>
            </div>
        </main>
    )
}

export default LoginPage