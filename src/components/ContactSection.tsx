
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    employees: "",
    segment: "",
    agreeToTerms: false
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Criar o corpo do email
      const emailBody = `
Nova solicitação de demonstração:

Nome: ${formData.name}
Cargo: ${formData.role}
Empresa: ${formData.company}
E-mail: ${formData.email}
Colaboradores: ${formData.employees}
Segmento: ${formData.segment}
      `;

      // Enviar email via mailto (fallback)
      const mailtoLink = `mailto:contato@axisai.com.br?subject=Nova Solicitação de Demonstração - ${formData.company}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);

      toast({
        title: "Solicitação enviada!",
        description: "Nossa equipe entrará em contato em breve para agendar sua demonstração.",
      });

      // Limpar formulário
      setFormData({
        name: "",
        role: "",
        company: "",
        email: "",
        employees: "",
        segment: "",
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente pelo e-mail.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Pronto para transformar sua empresa com{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                inteligência artificial de verdade?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solicite uma demonstração gratuita e veja na prática como a AXISAI pode revolucionar seu atendimento,
              análise de dados e tomada de decisão
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite sua Demonstração</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Cargo</label>
                    <Input
                      placeholder="Ex: CEO, Diretor, Gerente"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                    <Input
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">E-mail Profissional</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Quantidade de Colaboradores</label>
                    <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 colaboradores</SelectItem>
                        <SelectItem value="11-50">11-50 colaboradores</SelectItem>
                        <SelectItem value="51-200">51-200 colaboradores</SelectItem>
                        <SelectItem value="200+">Mais de 200 colaboradores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Segmento de Atuação</label>
                    <Select value={formData.segment} onValueChange={(value) => handleInputChange('segment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saude">Saúde</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="varejo">Varejo</SelectItem>
                        <SelectItem value="servicos">Serviços</SelectItem>
                        <SelectItem value="tecnologia">Tecnologia</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    Concordo com a{" "}
                    <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>{" "}
                    e em receber comunicações da AXISAI
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold group"
                  disabled={!formData.agreeToTerms}
                >
                  Quero uma Demonstração
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Entre em Contato</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">E-mail</div>
                      <div className="font-semibold text-slate-900">contato@axisai.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Telefone</div>
                      <div className="font-semibold text-slate-900">49 9195-1122</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Endereço</div>
                      <div className="font-semibold text-slate-900">Rua Atilio Faoro, 85 — Centro, Caçador - SC</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Não encontrou o que procurava?</h3>
                <p className="mb-6">Entre em contato com nossa equipe especializada</p>
                <div className="flex justify-center">
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white hover:brightness-110 transition duration-300 font-semibold">
                    <a href="mailto:contato@axisai.com.br">contato@axisai.com.br</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
