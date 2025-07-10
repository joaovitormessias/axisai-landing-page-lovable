
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <img 
              src="/lovable-uploads/logo_branca.svg" 
              alt="AXISAI Logo" 
              className="h-10 w-auto"
            />
          </div>

          <div className="block">
            {/*TO DO: Quando a pessoa clicar no botão deve ser redirecionada para o link https://app.axisai.com.br/ */}
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white"
              onClick={scrollToContact}
            >
              Acessar Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
