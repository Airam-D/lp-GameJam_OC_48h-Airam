function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-fundo-principal">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Video_GameJam.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-texto tracking-tight uppercase">
          GameJam <span className="text-marca">OC 48h</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-texto-mutado font-medium max-w-2xl leading-relaxed">
          48 horas, um tema surpresa e o seu primeiro jogo publicado.
          De 6 a 8 de agosto de 2027, no Espaço Maker Municipal.
        </p>

        <a
          href="#inscricao"
          className="mt-8 inline-flex items-center gap-3 bg-destaque hover:bg-destaque/90 text-texto font-bold px-8 py-4 rounded-full shadow-lg shadow-destaque/30 transition-all transform hover:scale-105"
        >
          Garantir Ingressos
        </a>
      </div>
    </section>
  )
}

export default Hero
