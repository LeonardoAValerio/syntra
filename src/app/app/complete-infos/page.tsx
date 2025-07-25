'use client';

import { UserContext } from "@/contexts/UserContext";
import { clientApi } from "@/lib/api/api";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function CompleteInfos() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const { user, setUser, reloadingUser } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        console.log("Usuário: ", user)
        if (user === null) {
            router.push("/");
        }
    }, [user]);
        
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!name) {
            console.log("Precisa de nome");
            return;
        }

        if(!cpf) {
            console.log("Precisa de nome");
            return;
        }

        const user = await clientApi.user.updateProfile({name, cpf, isCompleteInfos: true});
        setUser(user);
        reloadingUser()
        router.push("/app")
    }

    return <main className="w-screen h-screen bg-primary-black flex items-center justify-center">
        <div className="bg-primary-white w-104 h-112 flex flex-col p-4 items-center gap-4">
            <h1>Complete suas informações</h1>
            <p>É necessário que você preencha suas informações para seguir na utilização do sistema</p>
            <form className="flex flex-col w-full p-4 gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label>Nome</label>
                    <input type="text" placeholder="Como você quer ser chamado?" onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div className="flex flex-col">
                    <label>CPF</label>
                    <input type="text" placeholder="Informe seu CPF" onChange={(e) => setCpf(e.target.value)} required></input>
                </div>
                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    </main>
}