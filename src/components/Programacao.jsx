import { useState } from 'react'
import { programacao } from '../data/evento'

function Programacao() {
    const [itemAtivo, setItemAtivo] = useState(null)

    function alternarItem(index) {
        setItemAtivo(itemAtivo === index ? null : index)
    }

    return (
        <section id="programacao" className="bg-fundo-principal py-16 px-4 text-texto">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-marca uppercase tracking-wider mb-10">
                    Cronograma do Evento
                </h2>

                <div className="space-y-4">
                    {programacao.map((item, index) => (
                        <div
                            key={index}
                            className="bg-fundo-secundario rounded-xl border border-marca/10 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => alternarItem(index)}
                                className="w-full flex items-center gap-4 p-4 text-left cursor-pointer hover:bg-marca/5 transition-colors focus:outline-none"
                            >
                                <div className="flex flex-col items-center justify-center bg-marca/10 border border-marca/20 rounded-lg px-3 py-1.5 ">
                                    <span className="text-xs font-bold uppercase text-marca">{item.dia}</span>
                                    <span className="text-sm font-black text-texto">{item.horario}</span>
                                </div>

                                <div className="flex-1 flex justify-between items-center">
                                    <p className="text-base font-medium text-texto">{item.atividade}</p>
                                    <span className={`text-marca text-xl font-bold transition-transform duration-200 ${itemAtivo === index ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </div>
                            </button>

                            {itemAtivo === index && (
                                <div className="px-4 pb-4 pt-2 border-t border-marca/5 bg-fundo-principal/30 animate-fadeIn">
                                    <p className="text-sm text-texto-mutado leading-relaxed">
                                        {item.detalhes}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programacao
