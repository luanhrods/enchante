import Image from 'next/image'
import Link from 'next/link'
import { Play, Instagram, Mail, Youtube, Smartphone, PenTool, Video } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Flying icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Instagram className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-delay-1">
          <Play className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float-delay-2">
          <Mail className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delay-3">
          <Smartphone className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 animate-float-delay-4">
          <PenTool className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/4 right-1/2 animate-float-delay-5">
          <Video className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <span className="font-semibold text-sm font-montserrat">Luan Chicale Studio</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="text-gray-400 hover:text-purple-600 text-lg font-nunito transition-colors duration-300">Início</Link>
          <Link href="#services" className="text-gray-400 hover:text-purple-600 text-lg font-nunito transition-colors duration-300">Serviços</Link>
          <Link href="#references" className="text-gray-400 hover:text-purple-600 text-lg font-nunito transition-colors duration-300">Referências</Link>
          <Link href="#contact" className="text-gray-400 hover:text-purple-600 text-lg font-nunito transition-colors duration-300">Contato</Link>
        </nav>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-lg font-medium font-nunito hover:bg-purple-700 transition-colors duration-300">
          Fale conosco agora
        </button>
      </header>

      <main className="pb-20 relative z-10">
        {/*... */}
        
        <section id="contact" className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-6xl font-extrabold mb-8 md:mb-0 font-montserrat">
              Transforme seu sonho
              em realidade
            </h2>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center font-nunito hover:bg-purple-700 transition-colors duration-300">
              Nosso WhatsApp
              <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </section>
        
        {/*... */}
        
        <footer className="bg-[#1E1E1E] py-24">
          <div className="container mx-auto px-6">
            <div className="text-center md:text-left text-gray-400 text-lg font-nunito">
              &copy; 2005-2024 LC Studio (Former ProjetoMidia)
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
