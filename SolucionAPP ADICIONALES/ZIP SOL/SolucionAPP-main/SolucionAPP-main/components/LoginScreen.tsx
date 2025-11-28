import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface GoogleCredentialResponse {
  credential: string;
}

interface DecodedToken {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLoginSuccess = (credentialResponse: GoogleCredentialResponse) => {
    try {
      setIsLoading(true);
      
      // Decodificar el JWT token
      const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
      
      console.log("✅ Google Login Exitoso:", {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        uid: decoded.sub
      });

      // Guardar datos en localStorage
      localStorage.setItem('user', JSON.stringify({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        uid: decoded.sub,
        loginMethod: 'google',
        loginTime: new Date().toISOString()
      }));

      // Simular verificación y navegar a cliente
      setTimeout(() => {
        navigate("/client");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("❌ Error al decodificar token:", error);
      alert("Error en la autenticación. Intenta nuevamente.");
      setIsLoading(false);
    }
  };

  const handleGoogleLoginError = () => {
    console.error("❌ Error en Google Login");
    alert("Error al conectar con Google. Intenta nuevamente.");
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
          {isLoading ? (
            <div className="mx-auto px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin text-blue-500" />
              <span>Conectando con Google...</span>
            </div>
          ) : (
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
                theme="light"
                size="large"
              />
            </div>
          )}
          <p className="text-xs text-gray-400 mt-4">Version Demo v1.0 - Google OAuth Integrado</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
