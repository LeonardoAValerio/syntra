"use client";
import { HeaderApp } from "@/components/app/header";
import { SidebarApp } from "@/components/app/sidebar";
import { UserContext } from "@/contexts/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { user } = useContext(UserContext);
    const pathname = usePathname();
    const hideLayout = pathname === "/app/complete-infos";

    if (hideLayout) return <>{children}</>;
    
    useEffect(() => {
        console.log("Usuário: ", user)
        if (user === null) {
            router.push("/");
        }else {
            if(!user.isCompleteInfos) {
                router.push("app/complete-infos")
            }
        }
    }, [user]);
    
    return (
        <main className="bg-primary-black h-screen w-screen flex">
            <SidebarApp items={[
                {label: "Profile", path: "app/profile"},
                {label: "Projetos", path: "app/projects"}]}/>
            <section className="w-full h-full">
                <HeaderApp />
                {children}
            </section>
        </main>
    )
}