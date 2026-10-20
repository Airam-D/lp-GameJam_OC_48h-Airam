import { useState } from 'react'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-fundo-secundario text-texto p-4 border-b border-marca/10 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <strong className="text-marca font-bold text-xl tracking-wider uppercase select-none">
          GameJam <span className="text-destaque">OC</span>
        </strong>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-texto text-sm font-bold uppercase tracking-wider bg-marca/10 px-3 py-1.5 rounded-lg border border-marca/20 cursor-pointer"
        >
          {menuAberto ? 'Fechar ✕' : 'Menu ☰'}
        </button>

        <nav className="hidden md:flex gap-6">
          <a href="#sobre" className="hover:text-marca transition-colors text-sm font-medium">Sobre</a>
          <a href="#programacao" className="hover:text-marca transition-colors text-sm font-medium">Programação</a>
          <a href="#autores" className="hover:text-marca transition-colors text-sm font-medium">Mentores</a>
          <a href="#inscricao" className="hover:text-marca transition-colors text-sm font-medium">Inscrição</a>
        </nav>
      </div>

      {menuAberto && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-fundo-secundario border-b border-marca/10 flex flex-col p-4 gap-4 animate-fadeIn shadow-xl">
          <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-marca text-sm font-medium py-1">Sobre</a>
          <a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-marca text-sm font-medium py-1">Programação</a>
          <a href="#autores" onClick={() => setMenuAberto(false)} className="hover:text-marca text-sm font-medium py-1">Mentores</a>
          <a href="#inscricao" onClick={() => setMenuAberto(false)} className="hover:text-marca text-sm font-medium py-1">Inscrição</a>
        </nav>
      )}
    </header>
  )
}

export default Cabecalho
