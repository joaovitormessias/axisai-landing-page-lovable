
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Dados sem Sentido",
      description: "Informações espalhadas em planilhas e sistemas que não geram insights acionáveis para o negócio."
    },
    {
      icon: Clock,
      title: "Decisões Lentas",
      description: "Processos decisórios demorados por falta de análises rápidas e precisas dos dados disponíveis."
    },
    {
      icon: Users,
      title: "Atendimento Limitado",
      description: "Equipe sobrecarregada com tarefas repetitivas que poderiam ser automatizadas com inteligência."
    },
    {
      icon: AlertTriangle,
      title: "Oportunidades Perdidas",
      description: "Falta de insights preditivos para antecipar tendências e capturar oportunidades de mercado."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Problemas que Freiam seu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Crescimento
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empresas perdem oportunidades valiosas quando dados não se transformam em ações inteligentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
