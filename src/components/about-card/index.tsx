import Image from "next/image"

export function AboutCards({ cards }: { cards: { imgPath: string, title: string, description: string }[]}) {
    return (
        <ul className="flex h-full justify-around flex-wrap gap-8">
            {cards.map((card, index) => {
                return <li key={index} className="border rounded-3xl h-180 w-96 flex flex-col items-center justify-around p-8">
                    <Image alt={card.imgPath} src={card.imgPath} width={200} height={200}></Image>
                    <div className="h-1/2 flex flex-col gap-4">
                        <h3 className="text-4xl" >{card.title}</h3>
                        <p className="text-2xl">
                            {card.description}
                        </p>
                    </div>
                </li>
            })}
        </ul>
    )
}