
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
              src="/lovable-uploads/0df23ff8-ed9d-4ae7-b5e8-a767fa875499.png" 
              alt="AXISAI Logo" 
              className="h-10 w-auto"
            />
          </div>

          <div className="block">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white"
              onClick={scrollToContact}
            >
              Demonstração Gratuita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
