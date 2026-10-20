import { evento } from '../data/evento'

function Rodape() {
    return (
        <footer className="bg-fundo-secundario text-texto-mutado text-center py-8 px-4 border-t border-marca/10 text-sm">
            <div className="max-w-3xl mx-auto space-y-2">
                <strong className="text-texto font-bold block tracking-wide uppercase text-xs">
                    {evento.nome} · 2027
                </strong>
                <p className="text-xs">{evento.local}</p>
                <p className="text-xs opacity-60 pt-4 border-t border-marca/5 font-medium italic">
                    "Evento fictício criado para fins didáticos"
                </p>
            </div>
        </footer>
    )
}

export default Rodape
