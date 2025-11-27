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
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24 w-full max-w-[100vw] overflow-x-hidden relative">
      <header className="bg-white sticky top-0 z-20 px-6 py-3 flex justify-between items-center border-b border-gray-100 shadow-sm w-full">
        <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg"><Home size={18} className="text-blue-500" /></div>
            <h1 className="text-lg font-bold text-slate-900">Solucion<span className="text-blue-500">APP</span></h1>
        </div>
        <div className="p-2 bg-gray-50 rounded-full"><Bell size={20} className="text-gray-600" /></div>
      </header>

      <div className="flex-1 px-6 pt-4 flex flex-col gap-6 w-full max-w-lg mx-auto">
        <div className="space-y-3 w-full">
            <h2 className="text-xl font-bold text-slate-900">¿Cómo podemos ayudarte?</h2>
            <div className="relative w-full">
                <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
                <input type="text" placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-11 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            </div>
            {!searchQuery && (
                <div className="grid grid-cols-2 gap-2 w-full">
                    <button onClick={() => handleQuickAction('URGENTE')} className="flex items-center gap-2 px-3 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-xs hover:bg-red-100 transition-colors"><Zap size={16} /> URGENTE</button>
                    <button onClick={() => handleQuickAction('INSTALACION')} className="flex items-center gap-2 px-3 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors"><Wrench size={16} /> INSTALACIÓN</button>
                    <button onClick={() => handleQuickAction('REPARACION')} className="flex items-center gap-2 px-3 py-3 bg-amber-50 text-amber-600 rounded-xl font-bold text-xs hover:bg-amber-100 transition-colors"><Hammer size={16} /> REPARACIÓN</button>
                    <button onClick={() => handleQuickAction('PRESUPUESTO')} className="flex items-center gap-2 px-3 py-3 bg-green-50 text-green-600 rounded-xl font-bold text-xs hover:bg-green-100 transition-colors"><ClipboardList size={16} /> PRESUPUESTO</button>
                </div>
            )}
        </div>

        <section className="w-full">
            <h2 className="text-base font-bold text-slate-900 mb-3">Servicios Disponibles</h2>
            <div className="grid grid-cols-2 gap-3 w-full">
            {filteredCategories.map((cat) => (
                <div key={cat.type} onClick={() => navigate(`/service/${encodeURIComponent(cat.type)}`)} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 active:scale-95 transition-transform cursor-pointer hover:shadow-md">
                    <div className="text-2xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-slate-900 text-sm">{cat.label}</h3>
                </div>
            ))}
            </div>
        </section>

        {activeJob && activeJob.status === JobStatus.PENDING && !searchQuery && (
             <div className="bg-white border-l-4 border-green-500 rounded-xl shadow-md p-4 flex items-center justify-between w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Código de Seguridad</p>
                    <p className="text-xs text-gray-400">Dicta esto al profesional:</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                    <span className="text-2xl font-mono font-bold text-slate-900">{activeJob.securityCode}</span>
                </div>
             </div>
        )}

        {!searchQuery && (
            <section className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm w-full">
                <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-blue-500 flex-shrink-0" size={32} />
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">Tu seguridad es prioridad</h2>
                </div>
                <p className="text-xs text-gray-500 mb-4">Entrevistamos a cada profesional, verificamos antecedentes y validamos matrícula.</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold text-gray-600">
                    <span className="bg-blue-50 px-2 py-1 rounded">Entrevista</span>
                    <span className="bg-blue-50 px-2 py-1 rounded">DNI OK</span>
                    <span className="bg-blue-50 px-2 py-1 rounded">Antecedentes OK</span>
                </div>
            </section>
        )}

        {!searchQuery && (
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg w-full">
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">OFERTA</span>
                <h3 className="font-bold text-xl mt-1">50% OFF en tu primer trabajo</h3>
                <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">Ver Oferta</button>
            </div>
        )}

        <AdBanner />
      </div>
      <SupportFab />
    </div>
  );
};
export default ClientHomeScreen;
