import { mentores } from '../data/evento'
import CartaoMentor from './CartaoMentor'

function Autores() {
    return (
        <section id="autores" className="bg-fundo-principal py-12 px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {mentores.map((mentor) => (
                    <CartaoMentor key={mentor.nome} nome={mentor.nome} area={mentor.area} />
                ))}
            </div>
        </section>
    )
}

export default Autores
