import { ArrowRight, Bot, Brain, Zap, FlaskConical, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel data
  const cards = [
    {
      id: 1,
      icon: FlaskConical,
      title: "AXISAI Labs",
      text: "Transforme ideias em automações reais. Receba melhorias mensais, alinhamentos estratégicos e bônus exclusivos que aceleram o crescimento.",
      highlight: "Empresas já economizam até 89%.",
      badge: "Vagas limitadas",
      cta: "Inscreva sua empresa no Labs →",
      action: () => window.open('https://axisai.com.br/labs', '_blank')
    },
    {
      id: 2,
      icon: Zap,
      title: "Automação sem integração",
      text: "Elimine tarefas repetitivas em qualquer sistema. Nossa IA atua direto na interface, sem integrações complicadas.",
      highlight: "Ganhe eficiência sem mudar sua estrutura atual.",
      cta: "Ver como funciona →",
      action: () => scrollToContact()
    },
    {
      id: 3,
      icon: Brain,
      title: "Gestor Inteligente",
      text: "Converse com seus dados como se fossem pessoas. Faça perguntas em linguagem natural e receba respostas em gráficos, relatórios e insights.",
      highlight: "Do SQL ao gráfico em segundos.",
      cta: "Testar o Gestor →",
      action: () => scrollToContact()
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Atendimento WhatsApp",
      text: "Atenda clientes 24/7 com uma IA que entende, responde e converte. Mais rápido que um humano, mais humano que um robô comum.",
      highlight: "Escala ilimitada sem perder a personalização.",
      cta: "Falar com a IA →",
      action: () => scrollToContact()
    }
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, cards.length]);

  // Reduce motion check
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsAutoPlaying(!mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsAutoPlaying(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated spheres background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-cyan-300/15 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Card Carousel - Full Hero */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Soluções AXISAI"
        >
          {/* Carousel Track */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Gradient Masks for continuity effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none hidden sm:block"></div>
            
            {/* Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div 
                className="flex transition-transform duration-300 ease-out h-full"
                style={{
                  transform: `translateX(${-currentIndex * (100 / 3)}%)`,
                  width: '300%'
                }}
              >
                {cards.map((card, index) => {
                  const Icon = card.icon;
                  const isActive = index === currentIndex;
                  
                  return (
                    <div
                      key={card.id}
                      className={`flex-shrink-0 w-1/3 h-full px-4 sm:px-8 lg:px-16 flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                      }`}
                    >
                      <div className="w-full max-w-lg h-[500px] sm:h-[600px] lg:h-[650px] flex flex-col">
                        {/* Glassmorphism Card */}
                        <div className="relative flex-1 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                          {/* Badge */}
                          {card.badge && (
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                              {card.badge}
                            </div>
                          )}
                          
                          {/* Icon */}
                          <div className="mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center">
                              <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                              {card.title}
                            </h3>
                            
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                              {card.text}
                            </p>
                            
                            {/* Highlight */}
                            {card.highlight && (
                              <p className="text-cyan-300 text-sm sm:text-base font-medium mb-6 italic">
                                {card.highlight}
                              </p>
                            )}
                            
                            {/* CTA Button */}
                            <Button
                              onClick={card.action}
                              className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white text-base sm:text-lg py-3 sm:py-4 rounded-xl font-medium group transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                              aria-label={`${card.cta} para ${card.title}`}
                            >
                              {card.cta}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Solução anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Próxima solução"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir para ${cards[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;