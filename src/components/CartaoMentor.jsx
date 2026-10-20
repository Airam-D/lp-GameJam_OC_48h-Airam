function CartaoMentor({ nome, area }) {
    return (
        <article className="rounded-xl bg-fundo-secundario p-6 shadow border border-marca/20">
            <h3 className="text-xl font-bold text-marca">{nome}</h3>
            <p className="text-texto-mutado mt-2">{area}</p>
        </article>
    )
}

export default CartaoMentor
