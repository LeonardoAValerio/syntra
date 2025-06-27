import Link from "next/link";

export default function Login() {
    return (
        <main className="w-screen h-screen bg-primary-black flex items-center justify-center">
            <form className="border border-primary-white bg-second-black p-4 gap-8 flex flex-col text-primary-white rounded-3xl">
                <div className="justify-center items-center flex w-full">
                    <h2 className="text-3xl">Login</h2>
                </div>
                <div className="flex flex-col gap-2 border p-2 border-primary-white">
                    <label>Email</label>
                    <input type="email" className="border p-2"></input>
                </div>
                <div className="flex flex-col gap-2 border p-2 border-primary-white">
                    <label>Senha</label>
                    <input type="password" className="border p-2"></input>
                </div>
                <div className="flex justify-between">
                    <div className="bg-primary-white text-primary-black rounded-3xl w-24 h-8 flex items-center justify-center">
                        <button><Link href={"/"}>Voltar</Link></button>
                    </div>
                    <div className="bg-primary-white text-primary-black rounded-3xl w-24 h-8 flex items-center justify-center cursor-pointer">
                        <button className="hover:pointer cursor-pointer" type="submit">Entrar</button>
                    </div>
                </div>
            </form>
        </main>
    )
}