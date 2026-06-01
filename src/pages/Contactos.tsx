export default function Contactos() {
  return (
    <div className="px-6 pt-6 pb-40 md:px-12 md:pt-10 min-h-[80vh] flex flex-col justify-center max-w-5xl">
      <div className="space-y-12 md:space-y-20">
        <p className="mb-10 text-xl text-brand-black">edgeline arquitectos, lda.</p>
        <div className="space-y-2">
          <p className="editorial-sub opacity-40">atelier</p>
          <p className="text-2xl md:text-3xl">Rua Pedro e Inês, 3, Piso 1 – E5 | Parque das Nações</p>
          <p className="text-2xl md:text-3xl">1990-074 Lisboa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-2">
            <p className="editorial-sub opacity-40">email</p>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl hover:opacity-60 transition-opacity cursor-pointer">info@edgeline.pt</p>
              <p className="text-xl md:text-2xl hover:opacity-60 transition-opacity cursor-pointer">berardo.arq@edgeline.pt</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="editorial-sub opacity-40">telefone</p>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl hover:opacity-60 transition-opacity cursor-pointer">+351 918 763 822</p>
              <p className="text-xl md:text-2xl hover:opacity-60 transition-opacity cursor-pointer">+351 218 549 122</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="editorial-sub opacity-40">instagram</p>
            <p className="text-xl md:text-2xl hover:opacity-60 transition-opacity cursor-pointer">edgelinearquitectos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
