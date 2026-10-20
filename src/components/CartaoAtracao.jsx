function CartaoAtracao({ nome, estilo, descricao }) {
    return (
        <article className="rounded-xl bg-fundo-secundario p-6 shadow-md border border-marca/10 flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xl font-bold text-texto">{nome}</h3>
                <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-marca bg-marca/10 border border-marca/20 px-2 py-0.5 rounded">
                    {estilo}
                </span>
                <p className="text-texto-mutado mt-4 text-sm leading-relaxed">
                    {descricao}
                </p>
            </div>
        </article>
    )
}

export default CartaoAtracao
