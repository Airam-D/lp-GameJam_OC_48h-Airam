import { useState } from 'react'

function PerguntasFrequentes() {
    const [abertoIndex, setAbertoIndex] = useState(null)

    const faqs = [
        {
            pergunta: "Quem pode participar da GameJam?",
            resposta: "Qualquer pessoa interessada em desenvolvimento de jogos, seja designer, programador, artista ou entusiasta, independente do nível de experiência."
        },
        {
            pergunta: "Preciso ter uma equipe formada?",
            resposta: "Não necessariamente! Você pode se inscrever individualmente e encontrar parceiros no primeiro dia do evento durante a dinâmica de formação de equipes."
        },
        {
            pergunta: "Quais ferramentas posso usar?",
            resposta: "Você é livre para usar qualquer engine de jogos (Unity, Unreal, Godot, Construct, etc.) e softwares de arte/som de sua preferência."
        }
    ]

    function alternarFaq(index) {
        setAbertoIndex(abertoIndex === index ? null : index)
    }

    return (
        <section id="perguntas-frequentes" className="bg-fundo-secundario py-16 px-4 text-texto">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-marca uppercase tracking-wider mb-10">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const estaAberto = abertoIndex === index
                        const idResposta = `faq-resposta-${index}`
                        const idBotao = `faq-botao-${index}`

                        return (
                            <div
                                key={index}
                                className="bg-fundo-principal rounded-xl border border-marca/10 shadow-sm overflow-hidden"
                            >
                                <h3>
                                    <button
                                        id={idBotao}
                                        onClick={() => alternarFaq(index)}
                                        aria-expanded={estaAberto}
                                        aria-controls={idResposta}
                                        className="w-full flex justify-between items-center p-5 text-left font-bold text-base hover:bg-marca/5 transition-colors focus:outline-none"
                                    >
                                        <span>{faq.pergunta}</span>
                                        <span className={`text-marca transition-transform duration-200 ${estaAberto ? 'rotate-180' : ''}`} aria-hidden="true">
                                            ▼
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={idResposta}
                                    role="region"
                                    aria-labelledby={idBotao}
                                    hidden={!estaAberto}
                                    className="px-5 pb-5 pt-1 border-t border-marca/5 bg-fundo-secundario/40 text-sm text-texto-mutado leading-relaxed"
                                >
                                    <p>{faq.resposta}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PerguntasFrequentes