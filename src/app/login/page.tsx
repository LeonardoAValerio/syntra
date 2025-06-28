import Link from "next/link";

export default function Login() {
    return (
        <main className="w-screen h-screen bg-primary-black flex items-center justify-start">
            <div className="w-1/4 h-full flex flex-col bg-second-black p-8 gap-12">
                <form className="gap-8 flex flex-col text-primary-white">
                    <div className="items-center flex w-full">
                        <h2 className="text-3xl">Login</h2>
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
                            <button className="hover:pointer cursor-pointer" type="submit">Entrar</button>
                        </div>
                        <div className="text-primary-white h-8 flex items-center justify-center">
                            <button><Link href={"/login/criar"}>Criar nova conta -></Link></button>
                        </div>
                    </div>
                </form>

                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <button
                            className="flex items-center gap-2 bg-primary-white border px-3 py-3 rounded-full shadow cursor-pointer"
                            >
                            <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                        </button>
                        <button
                            className="flex items-center gap-2 bg-primary-white border px-3 py-3 rounded-full shadow cursor-pointer"
                            >
                            <img src="/microsoft-icon.svg" alt="Microsot" className="w-6 h-6" />
                        </button>
                        <button
                            className="flex items-center gap-2 bg-primary-white border px-3 py-3 rounded-full shadow cursor-pointer"
                            >
                            <img src="/yahoo-icon.svg" alt="Yahoo" className="w-6 h-6" />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}