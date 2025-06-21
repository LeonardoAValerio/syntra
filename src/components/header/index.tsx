export function Header() {
    return (
        <header className="w-full h-24 flex justify-between items-center p-8 bg-primary-black text-primary-white fixed">
            <h1 className="text-4xl">Syntra</h1>
            <div className="flex gap-16 text-xl">
                <h2>Sobre</h2>
                <h2>Planos</h2>
                <h2>Entrar</h2>
            </div>
        </header>
    )
}