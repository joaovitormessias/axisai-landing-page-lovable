
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
      text: "Assinatura de automações com IA: entregas mensais, alinhamentos estratégicos, treinamento do time e bônus exclusivos.",
      proof: "Casos de economia operacional — até 89%.",
      badge: "Vagas limitadas",
      cta: "Inscreva sua empresa no Labs →",
      action: () => window.open('https://axisai.com.br/labs', '_blank')
    },
    {
      id: 2,
      icon: Zap,
      title: "Automação sem integração",
      text: "Rode IA por cima de qualquer sistema — sem mexer no backend.",
      emphasis: "sem integração",
      cta: "Ver como funciona →",
      action: () => scrollToContact()
    },
    {
      id: 3,
      icon: Brain,
      title: "Gestor Inteligente",
      text: "Pergunte em linguagem natural e receba análises direto do seu banco.",
      cta: "Testar o Gestor →",
      action: () => scrollToContact()
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Atendimento WhatsApp",
      text: "Chatbots que entendem e convertem — 24/7.",
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
              onClick={scrollToContact}
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>

        </div>

        <div className="lg:w-1/2 relative">
          {/* Card Carousel */}
          <div 
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-label="Soluções AXISAI"
          >
            {/* Carousel Track */}
            <div className="relative overflow-hidden">
              {/* Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>
              
              {/* Cards Container */}
              <div className="relative w-full h-80 lg:h-96">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(${-currentIndex * 100}%)`
                  }}
                >
                  {cards.map((card, index) => {
                    const Icon = card.icon;
                    const isActive = index === currentIndex;
                    
                    return (
                      <div
                        key={card.id}
                        className={`flex-shrink-0 w-full px-4 transition-all duration-300 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                        }`}
                      >
                        <div className="w-full max-w-md mx-auto h-full">
                          {/* Glassmorphism Card */}
                          <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                            {/* Badge */}
                            {card.badge && (
                              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                {card.badge}
                              </div>
                            )}
                            
                            {/* Icon */}
                            <div className="mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col h-full">
                              <h3 className="text-xl font-bold text-white mb-3">
                                {card.title}
                              </h3>
                              
                              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                                {card.emphasis ? (
                                  <>
                                    {card.text.split(card.emphasis)[0]}
                                    <span className="font-semibold text-cyan-300">
                                      {card.emphasis}
                                    </span>
                                    {card.text.split(card.emphasis)[1]}
                                  </>
                                ) : (
                                  card.text
                                )}
                              </p>
                              
                              {/* Proof/Evidence */}
                              {card.proof && (
                                <p className="text-cyan-300 text-xs font-medium mb-4 italic">
                                  {card.proof}
                                </p>
                              )}
                              
                              {/* CTA Button */}
                              <Button
                                onClick={card.action}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white text-sm py-2 rounded-lg font-medium group transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Solução anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Próxima solução"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-400 w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para ${cards[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
