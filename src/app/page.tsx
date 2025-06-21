import { AboutCards } from "@/components/about-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex h-screen bg-second-black text-primary-white p-24 items-center justify-around gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="text-6xl">Construa o seu sistema</h2>
            <h2 className="text-6xl">da sua forma</h2>
          </div>
          <div className="border flex items-center justify-center p-2 w-60 rounded-3xl">
            <h3 className="text-xl">Saiba mais</h3>
          </div>
        </div>
        <div>
          <Image alt="quebra cabeça" src={"/quebra-cabeca-de-quatro-pecas.png"} width={534} height={534}></Image>
        </div>
    </main>
    <main className="flex h-screen bg-white text-primary-black p-24 flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl" >Sobre</h2>
        <h3 className="text-2xl" >Solucione qualquer problema com a nossa ajuda</h3>
      </div>
      <AboutCards cards={[
        {
          imgPath: "/money-bag.png",
          title: "Controle financeiro",
          description: "Registre receitas, despesas e investimentos do seu jeito. Crie um painel sob medida, sem complicações."
        },
        {
          imgPath: "/caixa.png",
          title: "Gestão de estoque",
          description: "Controle entradas e saídas com campos personalizados. Adapte o sistema à sua operação."
        },
        {
          imgPath: "/cliente.png",
          title: "Organize seus dados",
          description: "Gerencie informações de clientes, compras e muito mais com total flexibilidade."
        },
        {
          imgPath: "/quebra-cabeca.png",
          title: "Sistema personalizado",
          description: "Monte seu sistema como quiser. Adicione módulos, defina regras e crie soluções únicas."
        }
      ]}></AboutCards>
    </main>
    </div>
  );
}
