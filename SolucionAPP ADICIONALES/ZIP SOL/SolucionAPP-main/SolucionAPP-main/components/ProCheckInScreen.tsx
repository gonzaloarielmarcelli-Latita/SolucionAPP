import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Lock } from 'lucide-react';
import { Job, JobStatus, UserPro, LatLng } from '../types';
import { getCurrentLocation, isArrived } from '../services/locationService';
import { MOCK_JOB, MOCK_PRO_USER, updateJobStatus } from '../services/dataService';
import SupportFab from './SupportFab';

const ProCheckInScreen: React.FC = () => {
  const navigate = useNavigate();
  const [pro, setPro] = useState<UserPro>(MOCK_PRO_USER);
  const [currentJob, setCurrentJob] = useState<Job>(MOCK_JOB);
  const [canCheckIn, setCanCheckIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showKeypad, setShowKeypad] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');

  useEffect(() => {
    if (!pro.isApproved) return; 
    const intervalId = setInterval(async () => {
        try {
            const loc = await getCurrentLocation();
            const arrived = isArrived(loc, currentJob.location);
            setCanCheckIn(arrived && currentJob.status === JobStatus.PENDING);
        } catch(e) {}
    }, 5000);
    return () => clearInterval(intervalId);
  }, [pro.isApproved, currentJob]);

  if (!pro.isApproved) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">¡Estás a un paso!</h2>
        <p className="text-gray-500 mb-8">Necesitamos validar tus datos.</p>
        <button onClick={() => window.open('https://wa.me/5492213537852', '_blank')} className="bg-green-500 text-white font-bold py-3 px-6 rounded-xl">Hablar con nosotros</button>
        <button onClick={() => setPro({...pro, isApproved: true})} className="mt-8 text-xs text-gray-300">[SIMULAR APROBACIÓN]</button>
      </div>
    );
  }

  const handleVerifyOtp = async () => {
      if (otp === currentJob.securityCode) {
         setLoading(true);
         await updateJobStatus(currentJob.id, JobStatus.ARRIVED);
         setCurrentJob({...currentJob, status: JobStatus.ARRIVED});
         setShowKeypad(false);
         setLoading(false);
      } else {
          alert("Código incorrecto");
          setOtp('');
      }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
           <button onClick={() => navigate('/')} className="bg-white p-2 rounded-full"><ArrowLeft size={20} /></button>
           <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ONLINE</span>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
          <span className="text-xs text-gray-400 uppercase font-bold">Trabajo Actual</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">#{currentJob.id}</h2>
          <p className="text-gray-700 mt-4 mb-6">{currentJob.description}</p>
          
          {currentJob.status === JobStatus.PENDING ? (
            <button
                disabled={!canCheckIn}
                onClick={() => setShowKeypad(true)}
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 ${canCheckIn ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-400'}`}
            >
                {canCheckIn ? <><Lock /> INGRESAR CÓDIGO</> : 'ACÉRCATE AL CLIENTE'}
            </button>
          ) : (
            <div className="bg-green-500 text-white p-4 rounded-2xl text-center font-bold">ESTÁS EN EL LUGAR ✅</div>
          )}
      </div>

      {showKeypad && (
          <div className="absolute inset-0 bg-white z-50 p-10 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">Código del Cliente</h3>
              <div className="text-4xl font-mono mb-8 tracking-widest">{otp || '____'}</div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1,2,3,4,5,6,7,8,9,0].map(n => (
                      <button key={n} onClick={() => setOtp(prev => (prev + n).slice(0,4))} className="w-16 h-16 bg-gray-100 rounded-full text-2xl font-bold">{n}</button>
                  ))}
              </div>
              <button onClick={handleVerifyOtp} className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold mb-2">VERIFICAR</button>
              <button onClick={() => setShowKeypad(false)} className="text-red-500 font-bold">CANCELAR</button>
          </div>
      )}
      <SupportFab />
    </div>
  );
};
export default ProCheckInScreen;
