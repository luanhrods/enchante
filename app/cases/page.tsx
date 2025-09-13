'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CasesPage() {
  const router = useRouter();
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      title: "Bienal do Livro do Rio de Janeiro",
      subtitle: "Identidade Visual Editora",
      description: "Desenvolvimento completo da identidade visual para editora participante da Bienal do Livro do Rio de Janeiro, criando uma presença marcante no evento.",
      link: "https://www.behance.net/gallery/228733803/Bienal-do-livro-do-Rio-de-Janeiro-ID-Visual-Editora",
      tags: ["Identidade Visual", "Editorial", "Branding"],
      gradient: "from-pink-500 via-purple-600 to-indigo-600",
      available: true
    },
    {
      id: 2,
      title: "Contentia App",
      subtitle: "Branding Completo",
      description: "Criação da identidade de marca para aplicativo de gestão de conteúdo, incluindo logo, paleta de cores e diretrizes de uso.",
      link: "https://www.behance.net/gallery/230516148/contentiaapp-Branding",
      tags: ["App Design", "Branding", "Digital"],
      gradient: "from-cyan-500 via-blue-600 to-purple-600",
      available: true
    },
    {
      id: 3,
      title: "Manipulação de Imagem",
      subtitle: "Mockup Livro Brasileiro",
      description: "Projeto de manipulação de imagem e criação de mockups para livro brasileiro, destacando técnicas avançadas de design gráfico.",
      link: "https://www.behance.net/gallery/223092707/Manipulacao-de-imagem-e-mockup-Livro-Brasileiro",
      tags: ["Mockup", "Manipulação", "Editorial"],
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      available: true
    },
    {
      id: 4,
      title: "Mente Empreendedora",
      subtitle: "Instagram Design",
      description: "Desenvolvimento de identidade visual e estratégia de conteúdo para Instagram, criando uma presença digital marcante e engajadora.",
      link: "https://www.behance.net/gallery/157336135/Mente-Empreendedora-(IG)",
      tags: ["Social Media", "Instagram", "Design"],
      gradient: "from-yellow-500 via-orange-600 to-red-600",
      available: true
    },
    {
      id: 5,
      title: "TubeLab 2021",
      subtitle: "Projeto Completo",
      description: "Projeto visual desenvolvido em 2021 para TubeLab, explorando conceitos modernos de design e identidade visual inovadora.",
      link: "https://www.behance.net/gallery/157311669/TubeLab-2021",
      tags: ["Branding", "Visual Identity", "2021"],
      gradient: "from-violet-500 via-indigo-600 to-blue-600",
      available: true
    }
  ];

  const handleCaseClick = (caseItem: typeof cases[0]) => {
    if (caseItem.available && caseItem.link !== "#") {
      window.open(caseItem.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Abstract Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 animate-pulse" />
      <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-16">
            <button
              onClick={handleBackHome}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Início
            </button>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
              Nossos
              <span className="block text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text">
                Cases.
              </span>
            </h1>

            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light tracking-wide">
              Conheça alguns dos projetos que desenvolvemos com paixão e estratégia, 
              gerando resultados reais para nossos clientes.
            </p>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {cases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 ${
                  caseItem.available 
                    ? 'hover:scale-105 hover:bg-white/10 cursor-pointer' 
                    : 'opacity-75 cursor-not-allowed'
                } ${hoveredCase === caseItem.id ? 'shadow-2xl' : 'shadow-lg'}`}
                onClick={() => handleCaseClick(caseItem)}
                onMouseEnter={() => setHoveredCase(caseItem.id)}
                onMouseLeave={() => setHoveredCase(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Top Bar */}
                <div 
                  className={`h-2 bg-gradient-to-r ${caseItem.gradient} transform transition-all duration-300 ${
                    hoveredCase === caseItem.id ? 'h-4' : 'h-2'
                  }`}
                />

                <div className="p-8">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Case Content */}
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {caseItem.title}
                  </h3>

                  <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${caseItem.gradient} bg-clip-text text-transparent`}>
                    {caseItem.subtitle}
                  </h4>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {caseItem.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Ver no Behance
                    </span>

                    <div className="text-cyan-400 transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${caseItem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Pronto para ser o
              <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text"> próximo case</span>?
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vamos criar estratégias digitais que geram resultados reais para sua marca.
            </p>

            <a
              href="https://wa.me/5511988913315?text=Ol%C3%A1!%20Vi%20os%20cases%20da%20Enchant%C3%A8%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              <span className="relative z-10">Fale Conosco</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-0 w-1 h-24 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-40" />
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40" />
        <div className="absolute bottom-1/3 left-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />
      </div>
    </div>
  );
}
