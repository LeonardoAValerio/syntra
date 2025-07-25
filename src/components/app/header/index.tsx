'use client'

import { UserContext } from "@/contexts/UserContext"
import { useContext } from "react"

export function HeaderApp() {
    const { user } = useContext(UserContext)
    const name = user?.name ?? "";
    const firstLetterName = name[0];
    
    const paths = [
        {
            text: "Home",
            path: ""
        }
    ]

    return (
        <header className="flex justify-between pr-4 pl-4 items-center w-full h-12 border-primary-white border-b bg-second-black">
            <ul className="text-primary-white flex gap-2">
                {paths.map((path, index) => {
                    const fullPath = "app/" + path.path;
                    const text = index !== 0 ? `> ${path.text}` : path.text
                    return <li key={index}><a href={fullPath}>{text}</a></li>
                })}
            </ul>
            <div className="w-6 bg-primary-white text-primary-black rounded-full flex items-center justify-center">
                <p>{firstLetterName}</p>
            </div>
        </header>
    )
}