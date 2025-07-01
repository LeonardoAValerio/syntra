import { AboutCards } from "@/components/about-card";
import { Header } from "@/components/header";
import { Plans } from "@/components/plans";
import Image from "next/image";
import Link from "next/link";

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
    <main>
      <Header/>
      <div>
        <section className="flex flex-col min-h-screen bg-second-black text-primary-white pt-28 p-12 items-center justify-around gap-12 md:p-24 md:flex-row">
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
            <img src={"/quebra-cabeca-de-quatro-pecas.png"}></img>
          </div>
        </section>
        <section className="flex min-h-screen bg-white text-primary-black pt-28 p-12 md:p-24 flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl" >EXEMPLOS</h2>
            <h3 className="text-2xl" >Solucione qualquer problema com a nossa ajuda</h3>
          </div>
          <AboutCards cards={cards}></AboutCards>
        </section>
        <section id="sobre" className="flex min-h-screen bg-second-black text-primary-white pt-28 p-12 md:p-24 gap-12 w-full">
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
        </section>
        <section id="planos" className="flex min-h-screen bg-primary-white text-primary-black pt-28 p-12 md:p-24 gap-2 w-full flex-wrap">
          <div className="flex flex-col gap-20 md:gap-20 justify-center w-full" >
            <h2 className="text-4xl md:text-5xl" >PLANOS</h2>
            <article className="gap-8 text-xl md:text-3xl">
              <p>
                Comece já a construir sua nova solucação. 
                Descubra tudo o que você pode criar com nosso plano gratuito. E, quando precisar de mais liberdade e recursos, o Pro estará pronto para acompanhar seu crescimento.
              </p>
            </article>
          </div>
          <Plans/>
        </section>
        <section className="flex min-h-screen bg-second-black text-primary-white pt-28 p-12 md:p-24 w-full gap-12 justify-between flex-wrap md:flex-nowrap">
          <form className="w-full md:w-1/2 border border-primary-white rounded-3xl p-12 flex flex-col gap-8">
            <h3 className="text-3xl">Enviei o formulário para entrarmos em contato</h3>
            <div className="flex flex-col gap-4 w-full text-2xl">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" required className="border rounded-2xl border-primary-white py-2 text-xl text-primary-gray px-4" placeholder="Informe seu nome"></input>
            </div>
            <div className="flex flex-col gap-4 w-full text-2xl">
              <label htmlFor="phone">Telefone</label>
              <input id="phone" type="tel" required className="border rounded-2xl border-primary-white py-2 text-xl text-primary-gray px-4" placeholder="Informe seu telefone"></input>
            </div>
            <div className="flex flex-col gap-4 w-full text-2xl">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required className="border rounded-2xl border-primary-white py-2 text-xl text-primary-gray px-4" placeholder="Informe seu email"></input>
            </div>
            <div className="flex flex-col gap-4 w-full text-2xl">
              <label htmlFor="about">Assunto</label>
              <textarea id="about" required className="border rounded-2xl border-primary-white py-2 text-xl text-primary-gray px-4" placeholder="Informe sobre o seu assunto ou dúvida"></textarea>
            </div>
            <button type="submit" className="text-3xl bg-primary-white rounded-3xl text-second-black w-80 h-16">
              ENVIAR
            </button>
          </form>
          <article className="flex flex-col gap-10 md:gap-20 w-full md:w-1/2">
            <h3 className="text-4xl md:text-6xl">NOS CONTATE</h3>
            <p className="text-2xl md:text-4xl">
              Ficou com alguma dúvida? Fique a vontade para entrar em contato com nossa equipe para fazer qualquer pergunta, ou entender melhor oque a Syntra propôe com demonstrações do sistema
            </p>
          </article>
        </section>
        <footer className="flex-col md:flex-row flex min-h-102 bg-primary-black text-primary-white p-10 md:p-20 w-full gap-12 justify-around">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex h-24 w-full justify-start items-center gap-1 tracking-widest text-4xl">
              <div className="relative w-20 h-20">
                <Image src={"/syntra-icon.png"} alt="Icon syntra" fill></Image>
              </div>
              <div>y</div>
              <div>n</div>
              <div>t</div>
              <div>r</div>
              <div>a</div>
            </div>
            <article className="text-2xl">
              Syntra é uma plataforma flexível e intuitiva para criar sistemas personalizados, adaptados às suas necessidades e ao crescimento do seu negócio.
            </article>
          </div>
          <div className="hidden md:block w-px bg-primary-white self-stretch"></div>
          <div className="flex flex-col gap-10">
            <h3 className="text-3xl">Contatos</h3>
            <ul className="ml-8 flex flex-col gap-4 text-xl">
              <li>leonardoaugustovalerio@gmail.com</li>
              <li>(45) 999548631</li>
              <li><Link href={"https://www.linkedin.com/in/leonardo-val%C3%A9rio-701a5a309/"}>Linkedin</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
