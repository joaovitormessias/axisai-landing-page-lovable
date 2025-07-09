
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">AXIS</span>
              </div>
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transformando dados em inteligência de negócios com IA avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Plataforma</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">IA Generativa</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Integrações</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Segurança</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-3">
              <p className="text-slate-300">
                <span className="text-blue-400">📧</span> contato@axisai.com.br
              </p>
              <p className="text-slate-300">
                <span className="text-blue-400">📞</span> +55 11 4002-8922
              </p>
              <p className="text-slate-300">
                <span className="text-blue-400">📍</span> Av. Paulista, 1000 - São Paulo, SP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} AXISAI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
