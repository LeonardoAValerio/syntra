'use client';

import { auth } from "@/lib/firebase/firebase";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, OAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            console.log("Deu certo");
        } catch (e) {
            console.log("Deu errado: ", e);
        }
    }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const token = await result.user.getIdToken();
            console.log("Token Firebase:", token);
        } catch (err) {
            console.error(err);
        }
    }

    const handleMicrosoftLogin = async () => {
        const provider = new OAuthProvider("microsoft.com");
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = OAuthProvider.credentialFromResult(result);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main className="w-screen h-screen flex items-center justify-start">
            <div className="w-full md:w-1/2 h-full flex flex-col bg-second-black p-8 gap-12">
                <form className="gap-8 flex flex-col text-primary-white" onSubmit={handleLogin}>
                    <div className="items-center flex w-full">
                        <h2 className="text-3xl">Login</h2>
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
                            <button className="hover:pointer cursor-pointer" type="submit" >Entrar</button>
                        </div>
                        <div className="text-primary-white h-8 flex items-center justify-center">
                            <button><Link href={"/login/criar"}>Criar nova conta ⇾</Link></button>
                        </div>
                    </div>
                </form>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <button onClick={handleGoogleLogin}
                            className="flex items-center gap-2 bg-primary-white border px-3 py-3 rounded-full shadow cursor-pointer"
                            >
                            <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                        </button>
                        <button onClick={handleMicrosoftLogin}
                            className="flex items-center gap-2 bg-primary-white border px-3 py-3 rounded-full shadow cursor-pointer"
                            >
                            <img src="/microsoft-icon.svg" alt="Microsot" className="w-6 h-6" />
                        </button>
                    </div>
                </section>
            </div>
            <div className="bg-primary-black hidden md:block w-full h-full">
            </div>
        </main>
    )
}