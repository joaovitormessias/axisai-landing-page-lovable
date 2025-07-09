
import { MessageSquare, Database, Cog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Database,
      title: "IA de Dados Gerenciais",
      description: "Transforme dados complexos em insights claros através de linguagem natural. Faça perguntas e receba análises instantâneas.",
      features: ["Análise por voz", "Dashboards inteligentes", "Relatórios automatizados", "Insights preditivos"],
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: MessageSquare,
      title: "IA de Atendimento Inteligente",
      description: "Automatize e personalize o atendimento com IA que aprende e evolui constantemente com cada interação.",
      features: ["WhatsApp integrado", "Respostas humanizadas", "Agendamento automático", "Análise pós-conversa"],
      gradient: "from-cyan-600 to-blue-400"
    },
    {
      icon: Cog,
      title: "Assistente Híbrido",
      description: "Soluções sob medida que combinam IA conversacional com expertise específica do seu setor de atuação.",
      features: ["Customização total", "Integração com sistemas", "Treinamento específico", "Suporte especializado"],
      gradient: "from-blue-500 to-cyan-300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ecossistema{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              AXISAI
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um conjunto completo de soluções em inteligência artificial para transformar como sua empresa
            utiliza dados, atende clientes e toma decisões estratégicas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${solution.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white group`}>
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
            <p className="text-lg text-slate-700 italic mb-6 max-w-4xl mx-auto">
              "Na AXISAI, acreditamos que a verdadeira inteligência artificial deve ser acessível, conversacional e 
              orientada a resultados de negócio mensuráveis."
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white px-8">
              Conheça Todas as Soluções
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
