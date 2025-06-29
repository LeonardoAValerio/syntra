'use client';

import { auth } from "@/lib/firebase/firebase";
import { Message } from "@/lib/types/message";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function CreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const localErrors: string[] = [];

        if (password.length < 6) localErrors.push("Senha deve ter mais que 6 caracteres");
        if (!email.includes("@")) localErrors.push("Email inválido");

        if (localErrors.length > 0) {
            setMessages(localErrors.map((error) => ({text: error, type: "error"})))
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Criou a conta:", userCredential);
            setMessages([{text: "Usuário criado com sucesso. Vá para a página de login e entre no sistema", type: "success"}]); // limpa erros após sucesso
        } catch (e) {
            setMessages([{text: "Email já cadastrado", type: "error"}]);
        }
    };

    return (
        <main className="w-screen h-screen flex items-center justify-start">
            <div className="w-full md:w-1/2 h-full flex flex-col bg-second-black p-8 gap-12">
                <form className="gap-8 flex flex-col text-primary-white" onSubmit={handleLogin}>
                    <div className="items-center flex w-full">
                        <h2 className="text-3xl">Criar uma nova conta</h2>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <label htmlFor="email" >Email</label>
                        <input id="email" type="email" className="border-b p-2" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <label htmlFor="password" >Senha</label>
                        <input id="password" type="password" className="border-b p-2" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-primary-white text-primary-black rounded-3xl h-8 w-24 flex items-center justify-center cursor-pointer">
                            <button className="hover:pointer cursor-pointer" type="submit" >Criar</button>
                        </div>
                        <div className="text-primary-white h-8 flex items-center justify-center">
                            <button><Link href={"/login"}>Login ⇾</Link></button>
                        </div>
                    </div>
                </form>

                <ul>{messages.map((message, index) => {
                    return <li key={index} >{message.text}</li> 
                })}</ul>
            </div>
            <div className="bg-primary-black hidden md:block w-full h-full"></div>
        </main>
    )
}