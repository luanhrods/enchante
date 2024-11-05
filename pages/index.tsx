'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { Smartphone, Ruler, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const companies = [
    { name: 'Company 1', logo: '/images/company1.png' },
    { name: 'Company 2', logo: '/images/company2.png' },
    { name: 'Company 3', logo: '/images/company3.png' },
    { name: 'Company 4', logo: '/images/company4.png' },
    { name: 'Company 5', logo: '/images/company5.png' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gold-400 rounded-full opacity-10"
              initial={{ x: Math.random() * window.innerWidth, y: -20, scale: 0 }}
              animate={{
                y: window.innerHeight + 20,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Luan Chicale Studio Logo" width={40} height={40} />
        </div>
        <nav className="hidden md:flex space-x-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(servicesRef)}
            className="text-gray-400 hover:text-gold-400 text-sm md:text-base font-nunito transition-colors duration-300"
          >
            Serviços
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(testimonialsRef)}
            className="text-gray-400 hover:text-gold-400 text-sm md:text-base font-nunito transition-colors duration-300"
          >
            Referências
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(contactRef)}
            className="text-gray-400 hover:text-gold-400 text-sm md:text-base font-nunito transition-colors duration-300"
          >
            Contato
          </motion.button>
        </nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-transparent text-white px-4 py-2 rounded-md text-sm md:text-base font-medium font-nunito border border-gold-600 hover:bg-gold-600 transition-colors duration-300">
            Fale conosco agora
          </Link>
        </motion.div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Sophisticated mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#1E1E1E] z-50"
          >
            <div className="p-6">
              <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4" aria-label="Fechar menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="mt-8 flex flex-col space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(servicesRef)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-gold-400 text-base font-nunito transition-colors duration-300"
                >
                  Serviços
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(testimonialsRef)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-gold-400 text-base font-nunito transition-colors duration-300"
                >
                  Referências
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(contactRef)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-gold-400 text-base font-nunito transition-colors duration-300"
                >
                  Contato
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-transparent text-white px-4 py-2 rounded-md text-base font-medium font-nunito border border-gold-600 hover:bg-gold-600 transition-colors duration-300 text-center block">
                    Fale conosco agora
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-20 relative z-10">
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-16 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-montserrat">
                Construa<br />seus sonhos
              </h1>
              <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-md font-nunito">
                O Luan Chicale Studio (LC Studio) é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor." 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-transparent text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center font-nunito border border-gold-600 hover:bg-gold-600 transition-colors duration-300 md:px-4 md:py-2 md:text-sm"
                >
                  Saiba mais
                  <svg className="ml-2 w-4 h-4 md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1E1E1E] p-4 rounded-lg mb-4 flex items-center max-w-md"
              >
                <div className="bg-gold-600 p-2 rounded mr-4 flex-shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-nunito text-lg">Há mais de 5 anos</h3>
                  <p className="text-base text-gray-400 font-nunito">Fazendo a diferença no o mercado digital</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1E1E1E] p-4 rounded-lg flex items-center max-w-md"
              >
                <div className="bg-gold-600 p-2 rounded mr-4 flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-nunito text-lg">Alta excelência</h3>
                  <p className="text-base text-gray-400 font-nunito">
                    Ofertando soluções de design e marketing digital no Brasil, Canadá e Estados Unidos da América
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services section */}
        <section className="bg-[#1E1E1E] py-24" ref={servicesRef}>
          {/* ... (keep the existing services section, but replace purple with gold) */}
        </section>

        {/* What we offer section */}
        <section className="container mx-auto px-6 py-24">
          {/* ... (keep the existing "What we offer" section, but replace purple with gold) */}
        </section>

        {/* Companies we've worked with - Carousel */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
            Já trabalhamos com
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: `-${currentLogoIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full flex items-center justify-center p-4 bg-[#1E1E1E] rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image 
                    src={company.logo} 
                    
                    alt={`${company.name} - Cliente do Luan Chicale Studio`}
                    width={120}
                    height={60}
                    className="max-w-full h-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="container mx-auto px-6 py-24 mb-24" ref={testimonialsRef}>
          {/* ... (keep the existing testimonials section, but replace purple with gold) */}
        </section>

        {/* Contact section */}
        <section className="bg-[#1E1E1E] py-24" ref={contactRef}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-0 font-montserrat md:w-1/2 text-center md:text-left"
              >
                Transforme seus sonhos<br />em realidade
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor."
                  target="_blank" rel="noopener noreferrer"
                  className="bg-gold-600 text-white px-8 py-3 rounded-md text-sm md:text-base font-medium inline-flex items-center font-nunito hover:bg-gold-700 transition-colors duration-300"
                >
                  Nosso WhatsApp
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/images/logo.png" alt="LC Studio Logo" width={32} height={32} />
              <span className="font-semibold text-sm font-montserrat">LC Studio</span>
            </div>
            <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
              <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 text-sm font-nunito transition-colors duration-300">Ajuda</Link>
              <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 text-sm font-nunito transition-colors duration-300">Política de Privacidade</Link>
              <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 text-sm font-nunito transition-colors duration-300">Política de Dados</Link>
            </nav>
            <div className="text-gray-400 text-sm font-nunito">
              © 2024 Luan Chicale Studio.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
