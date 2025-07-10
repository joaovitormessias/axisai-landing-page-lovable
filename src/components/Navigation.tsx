
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const handleDashboardClick = () => {
    window.open('https://app.axisai.com.br/', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <img 
              src="/lovable-uploads/logo_axisai_com_nome.svg" 
              alt="AXISAI Logo" 
              className="h-10 w-auto"
            />
          </div>

          <div className="block">
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white"
              onClick={handleDashboardClick}
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
