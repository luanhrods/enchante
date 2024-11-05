import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { Smartphone, Ruler, Target } from 'lucide-react'

const Component: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L8FB0ESVM2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8FB0ESVM2');
          `
        }} />
        <title>Luan Chicale Studio | LC Studio - Serviços Digitais e Marketing de Conteúdo</title>
        <meta name="description" content="O Luan Chicale Studio (LC Studio) oferece serviços de marketing digital, design gráfico e produção de conteúdo. Transforme seu negócio com nossa expertise em projeto de mídia e marketing de conteúdo." />
        <meta name="keywords" content="Luan Chicale, LC Studio, Luan Chicale Studio, Luan Chicale Estúdio, Luan Chicale Estudio, LC Estúdio, Projeto Mídia, Marketing Digital, Serviços Digitais, Marketing de conteúdo, designer gráfico barato, Produção de marketing" />
        <link rel="canonical" href="https://www.luanchicalestudio.com" />
        <meta property="og:title" content="Luan Chicale Studio | LC Studio - Serviços Digitais e Marketing de Conteúdo" />
        <meta property="og:description" content="Transforme seu negócio com o Luan Chicale Studio. Especialistas em marketing digital, design gráfico e produção de conteúdo." />
        <meta property="og:image" content="https://www.luanchicalestudio.com/og-image.jpg" />
        <meta property="og:url" content="https://www.luanchicalestudio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Luan Chicale Studio",
              "alternateName": "LC Studio",
              "description": "O Luan Chicale Studio (LC Studio) oferece serviços de marketing digital, design gráfico e produção de conteúdo.",
              "url": "https://www.luanchicalestudio.com",
              "logo": "https://www.luanchicalestudio.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/luanchicalestudio",
                "https://www.instagram.com/luanchicalestudio",
                "https://www.linkedin.com/company/luanchicalestudio"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              }
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
        {/* Flying icons and decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#9333EA" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute top-3/4 right-1/4 animate-float-delay-1">
            <svg width="48" height="4" viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="4" rx="2" fill="#9333EA" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-3/4 animate-float-delay-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float-delay-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="#9333EA" fillOpacity="0.2"/>
            </svg>
          </div>
        </div>

        <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Luan Chicale Studio Logo" width={40} height={40} />
            <span className="font-semibold text-sm md:text-base font-montserrat">Luan Chicale Studio</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Serviços</button>
            <button onClick={() => scrollToSection(testimonialsRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Referências</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Contato</button>
          </nav>
          <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-transparent text-white px-4 py-2 rounded-md text-sm md:text-base font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
            Fale conosco agora
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 bottom-0 w-64 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4" aria-label="Fechar menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-8 flex flex-col space-y-4">
              <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Serviços</button>
              <button onClick={() => scrollToSection(testimonialsRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Referências</button>
              <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Contato</button>
              <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-transparent text-white px-4 py-2 rounded-md text-base font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300 text-center">
                Fale conosco agora
              </Link>
            </div>
          </div>
        </div>

        <main className="pb-20 relative z-10">
          <section className="container mx-auto px-6 pt-20 pb-32">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2 mb-16 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-montserrat">
                  Construa<br />seus sonhos
                </h1>
                <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-md font-nunito">
                  O Luan Chicale Studio (LC Studio) é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital.
                </p>
                <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor." 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-transparent text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300 md:px-4 md:py-2 md:text-sm">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4 md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
                <div className="bg-[#1E1E1E] p-4 rounded-lg mb-4 flex items-center max-w-md">
                  <div className="bg-purple-600 p-2 rounded mr-4 flex-shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-nunito text-lg">Há mais de 5 anos</h3>
                    <p className="text-base text-gray-400 font-nunito">Fazendo a diferença no o mercado digital</p>
                  </div>
                </div>
                <div className="bg-[#1E1E1E] p-4 rounded-lg flex items-center max-w-md">
                  <div className="bg-purple-600 p-2 rounded mr-4 flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-nunito text-lg">Alta excelência</h3>
                    <p className="text-base text-gray-400 font-nunito">
                      Ofertando soluções de design e marketing digital no Brasil, Canadá e Estados Unidos da América
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#1E1E1E] py-24" ref={servicesRef}>
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Smartphone className="w-6 h-6" />, 
                    title: "Na palma da sua mão", 
                    description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, será mais fácil pra nós tambem!" 
                  },
                  { icon: <Ruler className="w-6 h-6" />, 
                    title: "Na sua própria medida", 
                    description: "Com  nossos planos fechados, oferecemos diferentes níveis de necessidades, que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns, porém isso não nos impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender você." 
                  },
                  { icon: <Target className="w-6 h-6" />, 
                    title: "Movidos à excelência", 
                    description: "Quando dizemos que somos movidos à excelência, isso significa que faremos tudo ao nosso alcance para atingir os resultados esperados. E não estamos sozinhos nessa. Juntamente aos colaboradores e parceiros do LC Studio, temos como ofertar todas suas necessidades com especialistas renomados no mercado, sempre na medida certa para o seu projeto." 
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#252525] p-6 rounded-lg">
                    <div className="bg-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 font-inter">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-inter font-normal">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
              O que oferecemos?
              <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
              </svg>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { icon: '/images/services/criacao-websites.svg', 
                  title: 'Criação de Websites', 
                  description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.',
                  link:   'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Cria%C3%A7%C3%A3o%20de%20Websites.'
                },
                { icon: '/images/services/marketing-digital.svg', 
                  title: 'Marketing Digital', 
                  description: 'Ajudamos você a ser lembrado e  impactar o seu nicho no digital.',
                  link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20o%20Marketing%20Digital.'
                },
                { icon: '/images/services/webdesign.svg', 
                  title: 'Webdesign (UX)', 
                  description: 'Criamos experiências incríveis para seu website ou plataforma.',
                  link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Webdesign%20e%20UX/UI.'
                },
                { icon: '/images/services/midias-sociais.svg', 
                  title: 'Mídias Sociais', 
                  description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.',
                  link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20as%20m%C3%ADdias%20sociais'
                },
                { icon: '/images/services/design-grafico.svg', 
                  title: 'Design Gráfico', 
                  description: 'Fazemos imagens criativas e chamativas para seu negócio.',
                  link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20design%20gr%C3%A1fico.'
                },
                { icon: '/images/services/edicao-videos.svg', 
                  title: 'Edição de vídeos', 
                  description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.',
                  link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos.'
                },
              ].map((service, index) => (
                <Link href={service.link} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#1E1E1E] active:scale-95">
                  <div className="mb-4 text-purple-600">
                    <Image src={service.icon} alt={`${service.title} - Luan Chicale Studio`} width={69} height={69} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-nunito">{service.title}</h3>
                  <p className="text-gray-400 text-sm font-nunito h-20 flex items-center justify-center">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* New section: "Já trabalhamos com" */}
          <section className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
              Já trabalhamos com
              <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
              </svg>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-[#1E1E1E] rounded-lg transition-all duration-300 ease-in-out hover:bg-[#252525]">
                  <Image 
                    src={company.logo} 
                    alt={`${company.name} - Cliente do Luan Chicale Studio`} 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain" 
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 mb-24" ref={testimonialsRef}>
            <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
              O que dizem sobre nós?
              <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
              </svg>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                { 
                  offset: 'md:translate-y-0', 
                  image: '/images/testimonials/testimonial1.png',
                  text: "Luan trabalhou extremamente bem com nossa equipe e conseguiu concluir as tarefas sem comprometer a qualidade de seu trabalho. Ele ajudou nossa equipe no lançamento de várias campanhas para diversos clientes em diferentes setores na América do Norte.",
                  name: "- Justin Lazorko",
                  position: "Diretor de Marketing da YourListingExpert"
                },
                { 
                  offset: 'md:translate-y-12', 
                  image: '/images/testimonials/testimonial2.png',
                  text: "Eu adorei a atenção e gentileza que deram pro meu perfil... Aumentei minhas visualizações e consegui alcançar novos parceiros. Me ajudaram a melhorar a qualidade dos meus vídeos com dicas maravilhosas!!! Recomendo muito!!!",
                  name: "- Thayse Rodrigues",
                  position: "Proprietária do perfil @eu.redecorando"
                },
                { 
                  offset: 'md:translate-y-24', 
                  image: '/images/testimonials/testimonial3.png',
                  text: "O Luan tornou nosso YouTube muito mais fácil de apresentar para possíveis parceiros. Recomendamos ele e sua equiipe. Trabalho profissional, seguro, com relatórios e alinhamentos ótimos. Foi um prazer trabalhar com eles.",
                  name: "- Leonardo Phelipe",
                  position: "Fundador do zeroEleven Agency"
                },
              ].map((item, index) => (
                <div key={index} className={`bg-[#1E1E1E] p-8 rounded-lg ${item.offset} transition-all duration-300 ease-in-out`}>
                  <p className="text-gray-400 mb-6 text-base font-nunito">
                    {item.text}
                  </p>
                  <div className="flex items-center">
                    <Image src={item.image} alt={`${item.name} - Depoimento sobre o Luan Chicale Studio`} width={64} height={64} className="rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-base font-nunito">{item.name}</h4>
                      <p className="text-sm text-gray-400 font-nunito">{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#1E1E1E] py-24" ref={contactRef}>
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-0 font-montserrat md:w-1/2 text-center md:text-left"> Transforme seus sonhos<br />em realidade</h2>
                <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor."
                  target="_blank" rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-8 py-3 rounded-md text-sm md:text-base font-medium inline-flex items-center font-nunito hover:bg-purple-700 transition-colors duration-300">
                  Nosso WhatsApp
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
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
                <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Ajuda</Link>
                <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Privacidade</Link>
                <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Dados</Link>
              </nav>
              <div className="text-gray-400 text-sm font-nunito">
                © 2024 Luan Chicale Studio.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Component
