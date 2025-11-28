import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginScreen from './components/LoginScreen';
import ClientHomeScreen from './components/ClientHomeScreen';
import ProCheckInScreen from './components/ProCheckInScreen';
import ServiceListScreen from './components/ServiceListScreen';

const GOOGLE_CLIENT_ID = '918672194717-rihst9miimgqlce9jgej7fdbfo4qahi3.apps.googleusercontent.com';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <HashRouter>
        <div className="antialiased text-gray-900 font-sans">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/client" element={<ClientHomeScreen />} />
            <Route path="/service/:category" element={<ServiceListScreen />} />
            <Route path="/pro-checkin" element={<ProCheckInScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </HashRouter>
    </GoogleOAuthProvider>
  );
};

export default App;