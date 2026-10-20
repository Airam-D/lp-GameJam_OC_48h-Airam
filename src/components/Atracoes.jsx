import { mentores } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
    return (
        <section id="autores" className="bg-fundo-secundario py-16 px-4 text-texto">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-marca uppercase tracking-wider mb-10">
                    Mentores Convidados
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {mentores.map((mentor) => (
                        <CartaoAtracao
                            key={mentor.nome}
                            nome={mentor.nome}
                            estilo={mentor.area}
                            descricao={mentor.descricao}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Atracoes
