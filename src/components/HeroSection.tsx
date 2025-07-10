
import { ArrowRight, Bot, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated spheres background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-cyan-300/15 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
              Inteligência Artificial Avançada
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme dados em{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              decisões inteligentes
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Potencialize sua estratégia de dados com IA generativa e analytics avançado.
            Automatize processos, otimize atendimento e tome decisões baseadas em inteligência artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg group"
              onClick={() => window.open('https://app.axisai.com.br', '_blank')}
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-300 hover:bg-blue-900/50 px-8 py-4 rounded-lg font-semibold text-lg"
              onClick={() => window.open('https://app.axisai.com.br', '_blank')}
            >
              Ver Demonstração
            </Button>
          </div>

          
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Central logo with AI visualization */}
            <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-spin-reverse opacity-30"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-700 rounded-full animate-pulse opacity-70 blur-sm"></div>

              {/* Logo central */}
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/logo_axisai_sem_nome.svg"
                  alt="AXISAI Logo"
                  className="h-32 w-auto"
                />
              </div>

              {/* Floating icons in triangle formation */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4 rounded-full shadow-lg animate-bounce">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 transform">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-400 p-4 rounded-full shadow-lg animate-bounce delay-300">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 transform">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-300 p-4 rounded-full shadow-lg animate-bounce delay-700">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
