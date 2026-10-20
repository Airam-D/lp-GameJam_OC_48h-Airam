import { evento, destaques } from '../data/evento'

function Sobre() {
    return (
        <section id="sobre" className="bg-fundo-secundario py-16 px-4 text-texto">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-marca uppercase tracking-wider mb-6">
                    Sobre o Evento
                </h2>

                <p className="text-texto-mutado text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                    {evento.sobreTexto}
                </p>

                <div className="grid gap-6 sm:grid-cols-3">
                    {destaques.map((item) => (
                        <div key={item.valor} className="bg-fundo-principal p-6 rounded-xl border border-marca/10 shadow-md">
                            <strong className="block text-3xl font-black text-destaque mb-1">
                                {item.valor}
                            </strong>
                            <span className="text-sm font-medium text-texto-mutado uppercase tracking-wide">
                                {item.descricao}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sobre
