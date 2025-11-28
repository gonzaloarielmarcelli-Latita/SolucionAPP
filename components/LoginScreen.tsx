import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      setIsGoogleLoading(false);
      navigate("/client");
    }, 1500);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden p-4">
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header con Logo */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <Home size={48} className="text-blue-500" />
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-2">
            Solucion<span className="text-blue-500">APP</span>
          </h1>
          <p className="text-gray-600 text-xl font-medium max-w-2xl">
            Soluciones agiles, <span className="text-slate-900 font-semibold">tranquilidad absoluta.</span>
          </p>
        </div>

        {/* Contenedor Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-8">
          {/* Lado Izquierdo - Cliente */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                <Home size={32} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Necesito un servicio</p>
                <h2 className="text-3xl font-bold text-slate-900">Soy Cliente</h2>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">Encuentra y contrata profesionales verificados en tu area con un solo clic.</p>
            <button
              onClick={() => navigate("/client")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all active:scale-95"
            >
              <span>Buscar Profesionales</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Lado Derecho - Profesional */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl border border-slate-700 p-8 text-white hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300 font-semibold uppercase tracking-wide">Quiero trabajar</p>
                <h2 className="text-3xl font-bold text-white">Soy Profesional</h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">Accede a trabajos verificados y gestiona tus servicios de forma profesional.</p>
            <button
              onClick={() => navigate("/pro-checkin")}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all active:scale-95"
            >
              <span>Ingresar como Profesional</span>
              <CheckCircle2 size={20} />
            </button>
          </div>
        </div>

        {/* Google Login */}
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            className="mx-auto px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGoogleLoading ? (
              <><Loader2 size={18} className="animate-spin" /><span>Conectando...</span></>
            ) : (
              <><span>Continuar con Google</span></>
            )}
          </button>
          <p className="text-xs text-gray-400 mt-4">Version Demo v1.0</p>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
