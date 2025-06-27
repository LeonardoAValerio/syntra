import Link from "next/link";

export function Header() {
    return (
        <header className="w-full h-24 flex justify-between items-center p-8 bg-primary-black text-primary-white fixed">
            <h1 className="text-4xl">Syntra</h1>
            <div className="hidden gap-16 text-xl md:flex">
                <h2><a href={"#sobre"}>Sobre</a></h2>
                <h2><a href={"#planos"}>Planos</a></h2>
                <h2><Link href={"/login"}>Entrar</Link></h2>
            </div>
        </header>
    )
}