export default function Contactos() {
  return (
    <div className="px-6 pt-12 pb-40 md:px-12 md:pt-20 min-h-[80vh] flex flex-col justify-center max-w-5xl">
      <header className="mb-10 md:mb-16">
        <p className="editorial-sub mb-4 lowercase">diálogo</p>
        <h2 className="text-3xl md:text-6xl editorial-title lowercase">contactos</h2>
        <p className="mt-8 text-xl opacity-60 lowercase">edgeline – arquitectos associados, lda.</p>
      </header>
      
      <div className="space-y-12 md:space-y-20">
        <div className="space-y-2">
          <p className="editorial-sub opacity-40 lowercase">sede</p>
          <p className="text-2xl md:text-3xl lowercase">rua pedro e inês, 3, piso 1 – e5 | parque das nações</p>
          <p className="text-2xl md:text-3xl lowercase">1990-074 lisboa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-2">
            <p className="editorial-sub opacity-40 lowercase">email</p>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl lowercase hover:opacity-60 transition-opacity cursor-pointer">info@edgeline.pt</p>
              <p className="text-xl md:text-2xl lowercase hover:opacity-60 transition-opacity cursor-pointer">berardo.arq@edgeline.pt</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="editorial-sub opacity-40 lowercase">telefone</p>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl lowercase hover:opacity-60 transition-opacity cursor-pointer">+351 918 763 822</p>
              <p className="text-xl md:text-2xl lowercase hover:opacity-60 transition-opacity cursor-pointer">+351 218 549 122</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="editorial-sub opacity-40 lowercase">instagram</p>
            <p className="text-xl md:text-2xl lowercase hover:opacity-60 transition-opacity cursor-pointer">edgelinearquitectos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
