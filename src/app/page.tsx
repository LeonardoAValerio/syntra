import { AboutCards } from "@/components/about-card";
import { Plans } from "@/components/plans";
import Image from "next/image";

export default function Home() {
  const cards = [
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
  ]
  
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-second-black text-primary-white pt-28 p-12 items-center justify-around gap-12 md:p-24 md:flex-row">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="text-4xl">Construa o seu sistema</h2>
            <h2 className="text-4xl">da sua forma</h2>
          </div>
          <div className="border flex items-center justify-center p-2 w-60 rounded-3xl">
            <h3 className="text-xl">Saiba mais</h3>
          </div>
        </div>
        <div className="">
          <Image alt="quebra cabeça" src={"/quebra-cabeca-de-quatro-pecas.png"} width={534} height={534}></Image>
        </div>
      </main>
      <main className="flex min-h-screen bg-white text-primary-black pt-28 p-12 md:p-24 flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl" >EXEMPLOS</h2>
          <h3 className="text-2xl" >Solucione qualquer problema com a nossa ajuda</h3>
        </div>
        <AboutCards cards={cards}></AboutCards>
      </main>
      <main className="flex min-h-screen bg-second-black text-primary-white pt-28 p-12 md:p-24 gap-12 w-full">
        <div className="hidden md:flex md:flex-col w-1/2 text-5xl gap-8 justify-center items-center">
          <div>S</div>
          <div>Y</div>
          <div>N</div>
          <div>T</div>
          <div>R</div>
          <div>A</div>
        </div>
        <div className="flex flex-col gap-40 justify-center text-left md:text-right">
          <h2 className="text-5xl text-right" >QUEM SOMOS</h2>
          <article className="flex flex-col gap-8 text-xl md:text-2xl">
            <p>
              O Syntra nasceu da ideia de que todo negócio é único — e seu sistema de gestão também deveria ser. Em vez de forçar empresas a se adaptarem a softwares genéricos e engessados, criamos uma plataforma que permite que cada usuário construa seu próprio sistema, com os campos, módulos e fluxos que realmente fazem sentido para a sua operação.
            </p>
            <p>
              Nossa missão é democratizar a criação de soluções personalizadas, sem exigir conhecimento técnico ou investimentos altos em desenvolvimento. Com o Syntra, qualquer pessoa pode montar um sistema eficiente, sob medida, para gerenciar finanças, dados de clientes, estoque, processos internos e muito mais.
            </p>
            <p>
              No Syntra, o sistema é seu — e funciona do seu jeito.
            </p>
          </article>
        </div>
      </main>
      <main className="overflow-x-scroll flex min-h-screen bg-primary-white text-primary-black pt-28 p-12 md:p-24 gap-12 w-full flex-wrap">
        <div className="flex flex-col gap-20 md:gap-30 justify-center w-full md:w-1/2" >
          <h2 className="text-4xl md:text-5xl" >PLANOS</h2>
          <article className="gap-8 text-xl md:text-3xl">
            <p>
              Comece já a construir sua nova solucação. 
              Descubra tudo o que você pode criar com nosso plano gratuito. E, quando precisar de mais liberdade e recursos, o Pro estará pronto para acompanhar seu crescimento.
            </p>
          </article>
        </div>
        <Plans/>
      </main>
    </div>
  );
}
