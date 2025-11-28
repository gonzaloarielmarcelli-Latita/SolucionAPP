import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Home, ShieldCheck, Zap, Wrench, Hammer, ClipboardList, Search } from 'lucide-react';
import { getCategories, MOCK_JOB } from '../services/dataService';
import AdBanner from './AdBanner';
import SupportFab from './SupportFab';
import { JobStatus } from '../types';

const ClientHomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const allCategories = getCategories();
  const activeJob = MOCK_JOB; 

  const filteredCategories = allCategories.filter(cat => 
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.keywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleQuickAction = (action: string) => {
    let message = '';
    if (action === 'URGENTE') message = '🚨 HOLA! Tengo una URGENCIA...';
    if (action === 'INSTALACION') message = '👋 Hola! Necesito contratar instalador...';
    if (action === 'REPARACION') message = '🛠️ Hola! Tengo algo roto...';
    if (action === 'PRESUPUESTO') message = '📋 Hola! Solicito presupuesto...';
    window.open(`https://wa.me/5492213537852?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24 w-full overflow-hidden relative">
      <header className="bg-white sticky top-0 z-20 px-6 py-4 flex justify-between items-center border-b border-gray-100 shadow-sm w-full">
        <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-lg"><Home size={20} className="text-blue-500" /></div>
            <h1 className="text-lg font-bold text-slate-900">Solucion<span className="text-blue-500">APP</span></h1>
        </div>
        <button className="p-2.5 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"><Bell size={22} className="text-gray-600" /></button>
      </header>

      <div className="flex-1 px-6 pt-6 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <div className="space-y-4 w-full">
            <h2 className="text-lg font-bold text-slate-900">Buscar Servicio</h2>
            <div className="relative w-full">
                <Search size={20} className="absolute left-4 top-4 text-gray-400" />
                <input type="text" placeholder="Escribe el servicio que necesitas..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 py-3 bg-white border border-gray-100 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all" />
            </div>
            {!searchQuery && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full pt-2">
                    <button onClick={() => handleQuickAction('URGENTE')} className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-bold text-sm hover:bg-red-100 transition-colors active:scale-95"><Zap size={18} /> URGENTE</button>
                    <button onClick={() => handleQuickAction('INSTALACION')} className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors active:scale-95"><Wrench size={18} /> INSTALAR</button>
                    <button onClick={() => handleQuickAction('REPARACION')} className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-50 text-amber-600 rounded-lg font-bold text-sm hover:bg-amber-100 transition-colors active:scale-95"><Hammer size={18} /> REPARAR</button>
                    <button onClick={() => handleQuickAction('PRESUPUESTO')} className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg font-bold text-sm hover:bg-green-100 transition-colors active:scale-95"><ClipboardList size={18} /> PRESUP.</button>
                </div>
            )}
        </div>

        <section className="w-full">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Servicios Disponibles</h2>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            {filteredCategories.map((cat) => (
                <div key={cat.type} onClick={() => navigate(`/service/${encodeURIComponent(cat.type)}`)} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 active:scale-95 transition-all cursor-pointer hover:shadow-lg hover:border-blue-200 flex flex-col items-center text-center">
                    <div className="text-4xl mb-3">{cat.icon}</div>
                    <h3 className="font-semibold text-slate-900 text-xs leading-tight">{cat.label}</h3>
                </div>
            ))}
            </div>
        </section>

        {activeJob && activeJob.status === JobStatus.PENDING && !searchQuery && (
             <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg shadow-md p-5 flex items-center justify-between w-full animate-in fade-in">
                <div>
                    <p className="text-xs text-gray-600 uppercase font-bold tracking-wide">Codigo de Seguridad</p>
                    <p className="text-sm text-gray-500 mt-1">Dicta al profesional:</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-3xl font-mono font-bold text-green-600">{activeJob.securityCode}</span>
                </div>
             </div>
        )}

        {!searchQuery && (
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm w-full">
                <div className="flex items-start gap-4">
                    <ShieldCheck className="text-blue-600 flex-shrink-0 mt-1" size={40} />
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Tu seguridad es prioridad</h2>
                        <p className="text-sm text-gray-600 mb-3">Entrevistamos a cada profesional, verificamos antecedentes y validamos matricula.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold text-blue-600 border border-blue-200">✓ Entrevista</span>
                            <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold text-blue-600 border border-blue-200">✓ DNI Verificado</span>
                            <span className="bg-white px-3 py-1 rounded-lg text-xs font-bold text-blue-600 border border-blue-200">✓ Antecedentes OK</span>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {!searchQuery && (
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg w-full">
                <span className="bg-white/25 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">Promocion</span>
                <h3 className="font-bold text-2xl mt-3 mb-4">50% OFF en tu primer trabajo</h3>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 transition-all active:scale-95">Ver Oferta</button>
            </div>
        )}

        <AdBanner />
      </div>
      <SupportFab />
    </div>
  );
};
export default ClientHomeScreen;
