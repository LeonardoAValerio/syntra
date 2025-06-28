import Link from "next/link";

export default function CreateUser() {
    return (
        <main className="w-screen h-screen bg-primary-black flex items-center justify-start">
            <div className="w-1/4 h-full bg-second-black p-8">
                <form className="gap-8 flex flex-col text-primary-white">
                    <div className="items-center flex w-full">
                        <h2 className="text-3xl">Criar sua conta</h2>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <label>Email</label>
                        <input type="email" className="border-b p-2"></input>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                        <label>Senha</label>
                        <input type="password" className="border-b p-2"></input>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-primary-white text-primary-black rounded-3xl h-8 w-24 flex items-center justify-center cursor-pointer">
                            <button className="hover:pointer cursor-pointer" type="submit">Criar</button>
                        </div>
                        <div className="text-primary-white h-8 flex items-center justify-center">
                            <button><Link href={"/login"}>Login -></Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}