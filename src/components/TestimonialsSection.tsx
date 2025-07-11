
const TestimonialsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-900" id="depoimentos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Empresas que confiam na AXISAI
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheça as empresas que já transformaram seus processos com nossas soluções de IA
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 border border-slate-700">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            <a
              href="https://www.bellesoftware.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto flex justify-center items-center"
            >
              <img
                src="/lovable-uploads/f79e699c-1d12-4089-98b9-7cea469b6edb.png"
                alt="Belle Software"
                className="h-24 w-40 object-contain"
              />
            </a>
            <a
              href="https://www.playsaas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto flex justify-center items-center"
            >
              <img
                src="/lovable-uploads/7b9a2930-37a8-43d0-a7d7-88065a554234.png"
                alt="PlaySaaS"
                className="h-24 w-40 object-contain"
              />
            </a>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 text-lg mb-6">
              Junte-se às empresas que já estão transformando seus resultados com IA
            </p>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={scrollToContact}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
