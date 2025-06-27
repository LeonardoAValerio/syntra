export function Plans() {
    return (
        <div className="overflow-x-auto md:w-full">
          <table className="text-xl  w-full h-full border border-black text-center text-primary-black">
            <thead>
              <tr className="bg-primary-black text-primary-white">
                <th className="p-2 md:p-4 border border-black"></th>
                <th className="p-2 md:p-4 border border-black">Gratuito</th>
                <th className="p-2 md:p-4 border border-black">Pro</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="p-2 md:p-4 border border-black">Preço mensal</td>
                <td className="p-2 md:p-4 border border-black text-2xl"><strong>R$ 0,00</strong></td>
                <td className="p-2 md:p-4 border border-black text-2xl"><strong>R$ 39,00</strong></td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black">Características</td>
                <td className="p-2 md:p-4 border border-black"></td>
                <td className="p-2 md:p-4 border border-black"></td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black">Projetos</td>
                <td className="p-2 md:p-4 border border-black">1</td>
                <td className="p-2 md:p-4 border border-black">∞</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black">Módulos</td>
                <td className="p-2 md:p-4 border border-black">6</td>
                <td className="p-2 md:p-4 border border-black">∞</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black">Dados</td>
                <td className="p-2 md:p-4 border border-black">10.000</td>
                <td className="p-2 md:p-4 border border-black">∞</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black">Usuários</td>
                <td className="p-2 md:p-4 border border-black">10</td>
                <td className="p-2 md:p-4 border border-black">∞</td>
              </tr>
              <tr>
                <td className="p-2 md:p-4 border border-black"></td>
                <td className="p-2 md:p-4 border border-black">
                  <button className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition">Obter</button>
                </td>
                <td className="p-2 md:p-4 border border-black">
                  <button className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition">Obter</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>   
    )
}