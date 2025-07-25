export interface SidebarAppProps {
    items: { label: string; path: string }[];
}

export function SidebarApp({ items }: SidebarAppProps) {
    return (
        <aside className="w-60 h-full flex flex-col bg-second-black border-r border-primary-white">
            <section className="w-full h-12 border-primary-white border-b">
            </section>
            <section className="w-full">
                <nav className="h-full">
                    <ul className="h-full flex flex-col p-4 text-primary-white gap-4">
                        {items.map((item) => (
                            <li key={item.path} className="w-full">
                                <a href={item.path} className="block pl-4 p-2 hover:bg-primary-gray border rounded-2xl border-primary-white">
                                {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </aside>
    )
}