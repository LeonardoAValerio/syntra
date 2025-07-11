'use client'
import { UserContext } from "@/contexts/UserContext"
import { useContext } from "react"

export default function App() {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1>Olá, {user?.name}!</h1>
            <p>Seu email é: {user?.email}</p>
        </>
    )
}