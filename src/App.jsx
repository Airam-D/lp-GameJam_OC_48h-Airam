import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Cabecalho />
      <main className="bg-fundo-principal min-h-screen text-texto antialiased">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}

export default App
