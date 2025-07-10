
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Lima",
      role: "CEO, Grupo Prime Imóveis",
      content: "Nunca imaginamos que uma IA poderia ser tão próxima do nosso time comercial. A AXISAI fala com o cliente e entrega o lead qualificado com tudo pronto.",
      rating: 5,
      avatar: "/lovable-uploads/12174cd3-1392-4243-b7be-decbd74eb2ab.png"
    },
    {
      name: "Patrícia Moura",
      role: "Diretora, Clínica BellaVida",
      content: "Com a IA da AXISAI, eliminamos filas de agendamento, reduzimos 40% do tempo de atendimento e aumentamos o faturamento.",
      rating: 5,
      avatar: "/lovable-uploads/12174cd3-1392-4243-b7be-decbd74eb2ab.png"
    },
    {
      name: "Roberto Mendes",
      role: "CTO, TechSolutions Brasil",
      content: "Transformamos nossa tomada de decisão com a BI conversacional. Agora, qualquer gestor consegue extrair insights sem depender do time de dados.",
      rating: 5,
      avatar: "/lovable-uploads/12174cd3-1392-4243-b7be-decbd74eb2ab.png"
    }
  ];

  {/* TO DO:Remover porcentagens e colocar o logo das empresas aqui */ }
  const results = [
    { metric: "40%", description: "Redução em tempo de atendimento" },
    { metric: "35%", description: "Aumento na conversão de vendas" },
    { metric: "30%", description: "Economia em custos operacionais" },
    { metric: "25%", description: "Crescimento em satisfação do cliente" }
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <div className={`h-5 w-5 ${filled ? 'bg-gradient-to-r from-blue-400 to-cyan-300' : 'bg-gray-300'} rounded-full`}></div>
  );

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheça as histórias de transformação e resultados concretos obtidos com a AXISAI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-cyan-400 mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} filled={true} />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Juntou-se às empresas que já transformaram sua operação com a AXISAI
            </h3>
            <p className="text-slate-300">Resultados comprovados em diversos setores</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-slate-400">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-12 bg-slate-700 rounded opacity-50"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
