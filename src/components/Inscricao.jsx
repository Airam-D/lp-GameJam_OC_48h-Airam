import { useState } from 'react'

function Inscricao() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [ingresso, setIngresso] = useState('Participante — gratuita')
    const [quantidade, setQuantidade] = useState(1)
    const [erroNome, setErroNome] = useState('')
    const [enviado, setEnviado] = useState(false)

    const precoUnitario = ingresso.includes('R$ 40') ? 40 : 0
    const valorTotal = precoUnitario * quantidade

    function enviar(e) {
        e.preventDefault()

        if (nome.trim().length < 3) {
            setErroNome('O nome precisa ter pelo menos 3 letras!')
            return
        }

        setErroNome('')
        setEnviado(true)
    }

    if (enviado) {
        return (
            <section id="inscricao" className="bg-fundo-principal py-16 px-4 text-center text-texto">
                <div className="max-w-md mx-auto bg-fundo-secundario p-8 rounded-2xl border border-sucesso/30 shadow-lg">
                    <span className="text-4xl">🚀</span>
                    <h2 className="text-2xl font-black text-sucesso uppercase mt-4 mb-2">Pedido Confirmado!</h2>
                    <p className="text-texto-mutado leading-relaxed text-sm">
                        Parabéns, <strong className="text-texto font-bold">{nome}</strong>! Sua inscrição foi processada.
                    </p>
                    <div className="mt-6 p-4 bg-fundo-principal rounded-xl border border-marca/10 text-left space-y-2">
                        <p className="text-xs text-texto-mutado"><span className="font-bold text-texto">Ingresso:</span> {ingresso}</p>
                        <p className="text-xs text-texto-mutado"><span className="font-bold text-texto">Quantidade:</span> {quantidade}x</p>
                        <p className="text-sm font-bold text-marca border-t border-marca/5 pt-2">Total do Pedido: R\$ {valorTotal}</p>
                    </div>
                    <p className="text-xs text-texto-mutado/60 mt-6">Enviamos os vouchers para {email}</p>
                </div>
            </section>
        )
    }

    return (
        <section id="inscricao" className="bg-fundo-principal py-16 px-4 text-texto">
            <div className="max-w-md mx-auto bg-fundo-secundario p-8 rounded-2xl border border-marca/10 shadow-xl">
                <h2 className="text-2xl font-black text-center text-marca uppercase tracking-wider mb-6">
                    Inscrição do Evento
                </h2>

                <form onSubmit={enviar} className="space-y-5">
                    <label className="block">
                        <span className="block text-xs font-bold uppercase text-texto-mutado mb-2">Nome Completo</span>
                        <input
                            type="text"
                            required
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value)
                                if (e.target.value.trim().length >= 3) setErroNome('')
                            }}
                            className={`w-full bg-fundo-principal border rounded-xl px-4 py-3 text-texto focus:outline-none text-sm ${erroNome ? 'border-red-500' : 'border-marca/20 focus:border-marca'}`}
                            placeholder="Digite seu nome"
                        />
                        {erroNome && <span className="text-red-500 text-xs mt-1 block font-medium">{erroNome}</span>}
                    </label>

                    <label className="block">
                        <span className="block text-xs font-bold uppercase text-texto-mutado mb-2">E-mail</span>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-fundo-principal border border-marca/20 rounded-xl px-4 py-3 text-texto focus:outline-none focus:border-marca text-sm"
                            placeholder="seu-email@exemplo.com"
                        />
                    </label>

                    <div className="grid grid-cols-3 gap-4">
                        <label className="col-span-2 block">
                            <span className="block text-xs font-bold uppercase text-texto-mutado mb-2">Tipo de Ingresso</span>
                            <select
                                value={ingresso}
                                onChange={(e) => setIngresso(e.target.value)}
                                className="w-full bg-fundo-principal border border-marca/20 rounded-xl px-4 py-3 text-texto focus:outline-none focus:border-marca text-sm cursor-pointer"
                            >
                                <option value="Participante — gratuita">Participante — gratuita</option>
                                <option value="Participante com kit (camiseta + caneca) — R$ 40">Kit Completo — R$ 40</option>
                                <option value="Visitante no domingo — gratuita">Visitante — gratuita</option>
                            </select>
                        </label>

                        <label className="block">
                            <span className="block text-xs font-bold uppercase text-texto-mutado mb-2">Qtd</span>
                            <input
                                type="number"
                                required
                                min={1}
                                max={5}
                                value={quantidade}
                                onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-full bg-fundo-principal border border-marca/20 rounded-xl px-3 py-3 text-texto focus:outline-none focus:border-marca text-sm text-center"
                            />
                        </label>
                    </div>

                    <div className="bg-fundo-principal/50 p-4 rounded-xl border border-marca/5 flex justify-between items-center text-sm">
                        <span className="text-texto-mutado">Valor estimado:</span>
                        <strong className="text-base font-black text-marca">R\$ {valorTotal}</strong>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-destaque hover:bg-destaque/90 text-texto font-bold py-4 rounded-xl text-sm uppercase tracking-wider transition-transform transform hover:scale-[1.01] cursor-pointer"
                    >
                        Finalizar Pedido
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Inscricao
