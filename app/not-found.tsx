'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Abstract Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 animate-pulse" />
      <div className="absolute top-1/4 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }} />

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Large 404 with Gradient */}
        <div className="mb-8">
          <h1 
            className="text-8xl md:text-9xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent leading-none"
            style={{ 
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            404
          </h1>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
          Página não
          <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">
            encontrada.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light tracking-wide">
          A página que você procura não existe ou foi movida. Mas não se preocupe, 
          temos muitas outras estratégias digitais para te encantar!
        </p>

        {/* Abstract Blob with Logo */}
        <div className="relative mb-8">
          <div className="w-64 h-64 mx-auto relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 rounded-full opacity-80 animate-pulse"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            />
            <div 
              className="absolute inset-4 bg-gradient-to-l from-cyan-400 via-purple-500 to-pink-400 rounded-full opacity-60 animate-pulse"
              style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                animationDelay: '0.5s'
              }}
            />
            {/* Logo Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <img 
                  src="/enchante.png" 
                  alt="Enchantè Logo" 
                  className="w-20 h-20 object-contain filter drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleGoHome}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            <span className="relative z-10">Voltar ao Início</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="https://wa.me/5511988913315?text=Ol%C3%A1!%20Cheguei%20aqui%20pela%20p%C3%A1gina%20404%20e%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Enchant%C3%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-full transform hover:scale-105 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 uppercase tracking-wide"
          >
            <span className="relative z-10">Fale Conosco</span>
          </a>
        </div>

        {/* Countdown */}
        <div className="text-gray-400 text-sm">
          Redirecionando automaticamente em{' '}
          <span className="text-pink-400 font-bold text-base">{countdown}</span>{' '}
          segundos
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-60" />
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60" />
        <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
      </div>
    </div>
  );
}
