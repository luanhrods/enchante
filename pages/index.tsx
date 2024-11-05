// index.tsx

import React from 'react';

const HomePage = () => {
  return (
    <div className="font-montserrat text-gray-800 bg-white">
      {/* Cabeçalho */}
      <header className="flex justify-between items-center p-5 bg-gray-900">
        <h1 className="text-2xl font-bold text-gold-400 uppercase">enchantè</h1>
        <nav className="space-x-4 text-gold-400 font-medium">
          <a href="#services" className="hover:text-gold-600">Serviços</a>
          <a href="#about" className="hover:text-gold-600">Sobre</a>
          <a href="#contact" className="hover:text-gold-600">Contato</a>
        </nav>
      </header>

      {/* Seção principal com animação de fade-in */}
      <section className="text-center p-20 bg-gradient-to-br from-gray-700 to-gray-600 text-white animate-fadeIn">
        <h2 className="text-4xl font-bold">Transformamos sua Presença Digital</h2>
        <p className="mt-4 text-lg">Estratégias digitais focadas em resultados para marcas que desejam crescer no mercado brasileiro.</p>
        <a href="#services" className="mt-6 inline-block px-6 py-3 bg-gold-400 text-gray-900 font-semibold rounded-md hover:bg-gold-600 transition">
          Conheça nossos serviços
        </a>
      </section>

      {/* Carrossel infinito */}
      <section className="overflow-hidden relative my-8">
        <div className="flex animate-scroll space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="min-w-full" key={i}>
              <img src={`/images/banner${i}.jpg`} alt={`Banner ${i}`} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="services" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gold-400">Serviços de Marketing Digital</h2>
        <p className="mt-2 text-gray-600">Nossas soluções são criadas para impulsionar a presença da sua marca online.</p>
        <ul className="mt-8 space-y-4 text-lg font-semibold">
          <li>📱 Gestão de Redes Sociais</li>
          <li>🔍 Otimização para Mecanismos de Busca (SEO)</li>
          <li>✍️ Criação de Conteúdo Estratégico</li>
          <li>🌐 Design e Desenvolvimento de Websites</li>
          <li>📈 Campanhas de Publicidade Digital</li>
        </ul>
      </section>

      {/* Sobre */}
      <section id="about" className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-gold-400">Sobre a Enchantè</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          A Enchantè é uma agência de marketing digital dedicada a elevar marcas por meio de criatividade e estratégias personalizadas. 
          Com experiência no mercado brasileiro, nossa equipe entende as necessidades e objetivos de nossos clientes, oferecendo soluções exclusivas para aumentar visibilidade e alcançar resultados concretos.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Trabalhamos lado a lado com nossos parceiros para criar campanhas impactantes e gerenciar uma presença digital que realmente faz diferença.
        </p>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gold-400">Depoimentos de Clientes</h2>
        <div className="mt-8 space-y-6">
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"A Enchantè nos ajudou a transformar completamente nossa presença online. O crescimento foi notável em apenas alguns meses!"</p>
            <footer className="mt-4 text-gray-600 font-semibold">— Maria Oliveira, CEO da Empresa X</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Eles têm uma equipe incrível, que realmente entende de marketing digital e sabe como alcançar resultados."</p>
            <footer className="mt-4 text-gray-600 font-semibold">— João Silva, Diretor de Marketing</footer>
          </blockquote>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="p-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold text-gold-400">Fale Conosco</h2>
        <p className="mt-4 text-gray-300">Pronto para impulsionar sua marca? Entre em contato conosco e descubra como podemos ajudar.</p>
        <a href="mailto:contato@enchante.com" className="mt-6 inline-block px-6 py-3 bg-gold-400 text-gray-900 font-semibold rounded-md hover:bg-gold-600 transition">
          contato@enchante.com
        </a>
      </section>

      {/* Rodapé */}
      <footer className="p-5 text-center bg-gray-900 text-gold-400">
        <p>&copy; 2023 Enchantè - Agência de Marketing Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
