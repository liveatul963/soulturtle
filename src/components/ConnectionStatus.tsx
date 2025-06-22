import React from 'react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useSupabaseConnection } from '../hooks/useSupabase';

const ConnectionStatus: React.FC = () => {
  const { isConnected, isChecking } = useSupabaseConnection();

  if (isChecking) {
    return (
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/50">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
          <span className="text-sm text-gray-700">Checking connection...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed top-4 left-4 z-50 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border transition-all duration-300 ${
      isConnected 
        ? 'bg-green-50/90 border-green-200/50' 
        : 'bg-red-50/90 border-red-200/50'
    }`}>
      <div className="flex items-center space-x-2">
        {isConnected ? (
          <>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-700">Supabase Connected</span>
          </>
        ) : (
          <>
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-700">Connection Failed</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectionStatus;