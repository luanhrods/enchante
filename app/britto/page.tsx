"use client"

import { useState, useEffect } from "react"

export default function BrittoPage() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["segurança.", "performance.", "resultados.", "confiança."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700;800&family=Roboto:wght@400&display=swap');

        .britto-page,
        .britto-page * {
          box-sizing: border-box;
        }
        
        .britto-page {
          margin: 0;
          background-color: #002b36;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .britto-page *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        /* Hero Section */
        .hero-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          padding: 20px;
        }

        .hero-content h1 {
          margin: 0 0 20px;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 10vw, 140px);
          line-height: 0.9;
          font-style: normal;
          text-transform: uppercase;
        }

        .hero-content h1 .highlight {
          color: #d33682;
          display: block;
          height: clamp(80px, 12vw, 120px);
        }

        .hero-subtitle {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-size: clamp(18px, 3vw, 28px);
          font-weight: 300;
          margin: 30px 0;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-description {
          color: #aaa;
          font-family: "Roboto", sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.8;
          margin: 30px auto;
          max-width: 700px;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Benefits Section */
        .benefits-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .benefits-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .benefits-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
          text-align: center;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .benefit-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .benefit-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .benefit-card:hover::before {
          left: 100%;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: rgba(211, 54, 130, 0.5);
          background: rgba(211, 54, 130, 0.1);
          box-shadow: 0 15px 40px rgba(211, 54, 130, 0.2);
        }

        .benefit-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #d33682, #cb4b16);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 25px;
          box-shadow: 0 4px 15px rgba(211, 54, 130, 0.3);
        }

        .benefit-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 22px;
          margin: 0 0 15px;
          text-transform: uppercase;
          text-align: center;
        }

        .benefit-description {
          color: #e0e0e0;
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          text-align: center;
          opacity: 0.9;
        }

        /* Pricing Section */
        .pricing-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .pricing-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .pricing-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
          text-align: center;
        }

        .pricing-card {
          background: rgba(0, 0, 0, 0.4);
          border: 2px solid rgba(211, 54, 130, 0.5);
          border-radius: 30px;
          padding: 60px 40px;
          position: relative;
          backdrop-filter: blur(10px);
          text-align: center;
          overflow: hidden;
        }

        .pricing-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(211, 54, 130, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .promo-badge {
          background: linear-gradient(135deg, #ff4444, #ff6b6b);
          color: white;
          font-family: "Lexend", sans-serif;
          font-weight: bold;
          font-size: 14px;
          padding: 10px 25px;
          border-radius: 25px;
          display: inline-block;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(255, 68, 68, 0.4);
          animation: pulse 2s infinite;
          position: relative;
          z-index: 1;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .service-name {
          color: #d33682;
          font-family: "Lexend", sans-serif;
          font-weight: 800;
          font-size: clamp(36px, 6vw, 60px);
          margin: 0 0 20px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .service-tagline {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-size: clamp(16px, 3vw, 22px);
          margin: 0 0 40px;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }

        .price-container {
          margin: 40px 0;
          position: relative;
          z-index: 1;
        }

        .old-price {
          color: #999;
          font-family: "Lexend", sans-serif;
          font-size: clamp(24px, 4vw, 36px);
          text-decoration: line-through;
          margin-bottom: 10px;
        }

        .current-price {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          margin: 0;
        }

        .current-price .currency {
          font-size: 0.5em;
          vertical-align: super;
        }

        .price-period {
          color: #aaa;
          font-family: "Lexend", sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          margin-top: 10px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 50px 0;
          text-align: left;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .feature-item {
          color: #e0e0e0;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .feature-item::before {
          content: "✓";
          color: #d33682;
          font-weight: bold;
          font-size: 20px;
          flex-shrink: 0;
        }

        .cta-button {
          background: linear-gradient(135deg, #d33682, #cb4b16);
          color: #fff;
          padding: 20px 50px;
          border: none;
          border-radius: 50px;
          font-family: "Lexend", sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 25px rgba(211, 54, 130, 0.4);
          margin-top: 30px;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 35px rgba(211, 54, 130, 0.5);
          background: linear-gradient(135deg, #e63946, #d33682);
        }

        /* Marketing Extra Section */
        .extra-section {
          padding: 80px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .extra-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .extra-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 50px 40px;
          position: relative;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .extra-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 6vw, 48px);
          margin: 0 0 20px;
          text-transform: uppercase;
        }

        .extra-title .highlight {
          color: #d33682;
        }

        .extra-description {
          color: #e0e0e0;
          font-family: "Roboto", sans-serif;
          font-size: clamp(15px, 2.5vw, 18px);
          line-height: 1.8;
          margin: 20px 0 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .extra-services {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin: 30px 0;
        }

        .service-tag {
          background: rgba(211, 54, 130, 0.2);
          border: 1px solid rgba(211, 54, 130, 0.4);
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-size: 14px;
          padding: 10px 20px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .custom-price {
          color: #d33682;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(24px, 4vw, 32px);
          margin: 30px 0;
          text-transform: uppercase;
        }

        /* Responsive */
        @media screen and (max-width: 991px) {
          .hero-section {
            min-height: 600px;
            padding: 40px 20px;
          }

          .benefits-section,
          .pricing-section {
            padding: 60px 20px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pricing-card {
            padding: 40px 30px;
          }

          .extra-section {
            padding: 60px 20px;
          }

          .extra-card {
            padding: 40px 25px;
          }
        }

        @media screen and (max-width: 767px) {
          .hero-section {
            min-height: auto;
            height: auto;
            padding: 60px 16px;
          }

          .benefits-section,
          .pricing-section,
          .extra-section {
            padding: 40px 16px;
          }

          .pricing-card,
          .extra-card {
            padding: 30px 20px;
          }

          .features-list {
            margin: 30px 0;
          }

          .feature-item {
            font-size: 14px;
            padding: 12px 0;
          }

          .cta-button {
            padding: 16px 40px;
            font-size: 16px;
          }

          .extra-services {
            gap: 10px;
          }

          .service-tag {
            font-size: 12px;
            padding: 8px 15px;
          }
        }
      `}</style>

      <div className="britto-page">
        <main>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="particles-container">
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 20 + 15}s`,
                    animationDelay: `${Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
            <div className="hero-content">
              <h1>
                BRITTO
                <span className="highlight">{currentText}</span>
              </h1>
              <p className="hero-subtitle">
                Serviço Adicional Premium para Hospedagem Enchantè
              </p>
              <p className="hero-description">
                Proteção avançada, otimização contínua e análise profunda para manter seu site sempre no topo.
                Mais do que hospedagem, uma solução completa para o sucesso digital.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <div className="benefits-container">
              <h2 className="benefits-title">O que você ganha com <span style={{ color: '#d33682' }}>Britto</span></h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🛡️</div>
                  <h3 className="benefit-title">Firewall Customizado</h3>
                  <p className="benefit-description">
                    Proteção personalizada contra ameaças específicas do seu negócio. Sistema de firewall configurado
                    especialmente para suas necessidades, bloqueando ataques antes que cheguem ao seu site.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">🔍</div>
                  <h3 className="benefit-title">Análise Profunda</h3>
                  <p className="benefit-description">
                    Monitoramento 24/7 do seu site com relatórios detalhados de performance, vulnerabilidades e
                    oportunidades de melhoria. Identificamos problemas antes que afetem seus usuários.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">📈</div>
                  <h3 className="benefit-title">SEO Otimizado</h3>
                  <p className="benefit-description">
                    Otimização constante para motores de busca com ajustes técnicos, análise de palavras-chave e
                    melhorias contínuas para manter seu site sempre bem posicionado no Google.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <h3 className="benefit-title">Performance Máxima</h3>
                  <p className="benefit-description">
                    Otimização de velocidade, compressão de recursos e cache inteligente para garantir que seu site
                    carregue em milissegundos, melhorando a experiência do usuário e conversões.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3 className="benefit-title">Suporte Premium</h3>
                  <p className="benefit-description">
                    Atendimento prioritário com equipe sênior dedicada. Resposta em até 2 horas em dias úteis e
                    suporte técnico especializado sempre que você precisar.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h3 className="benefit-title">Relatórios Mensais</h3>
                  <p className="benefit-description">
                    Receba relatórios detalhados mensais com métricas de segurança, performance, SEO e recomendações
                    estratégicas para o crescimento contínuo do seu site.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="pricing-section">
            <div className="pricing-container">
              <h2 className="pricing-title">Investimento</h2>
              <div className="pricing-card">
                <div className="promo-badge">🔥 PROMOÇÃO LIMITADA</div>
                <h3 className="service-name">Britto Premium</h3>
                <p className="service-tagline">Proteção, Performance e Crescimento</p>

                <div className="price-container">
                  <div className="old-price">R$ 349,99</div>
                  <div className="current-price">
                    <span className="currency">R$</span>249<span style={{ fontSize: '0.6em' }}>,99</span>
                  </div>
                  <div className="price-period">por mês</div>
                </div>

                <ul className="features-list">
                  <li className="feature-item">Firewall customizado e configurado</li>
                  <li className="feature-item">Análise completa do site (semanal)</li>
                  <li className="feature-item">SEO constantemente otimizado</li>
                  <li className="feature-item">Monitoramento de uptime 24/7</li>
                  <li className="feature-item">Backup diário automatizado</li>
                  <li className="feature-item">Otimização de velocidade contínua</li>
                  <li className="feature-item">Suporte premium prioritário</li>
                  <li className="feature-item">Relatórios mensais detalhados</li>
                  <li className="feature-item">Proteção contra DDoS avançada</li>
                  <li className="feature-item">SSL premium com renovação automática</li>
                </ul>

                <a
                  href={https://pay.kirvano.com/453dc10b-44a8-4a46-a897-1a7cf6cf4f3c}`}
                  className="cta-button"
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          </section>

          {/* Marketing Extra Section */}
          <section className="extra-section">
            <div className="extra-container">
              <div className="extra-card">
                <h3 className="extra-title">
                  Precisa de <span className="highlight">Marketing Digital</span>?
                </h3>
                <p className="extra-description">
                  Além do Britto, oferecemos serviços completos de marketing digital customizados para captar clientes,
                  gerenciar campanhas no Google Ads, Facebook Ads, Instagram e outras plataformas. Estratégias
                  personalizadas para maximizar seu ROI e acelerar seu crescimento.
                </p>

                <div className="extra-services">
                  <span className="service-tag">Google Ads</span>
                  <span className="service-tag">Facebook Ads</span>
                  <span className="service-tag">Instagram Ads</span>
                  <span className="service-tag">LinkedIn Ads</span>
                  <span className="service-tag">Gestão de Campanhas</span>
                  <span className="service-tag">Análise de Dados</span>
                  <span className="service-tag">Estratégia Digital</span>
                  <span className="service-tag">Captação de Leads</span>
                </div>

                <div className="custom-price">💼 Preço Customizado por Projeto</div>

                <a
                  href={`https://wa.me/5511988913315?text=${encodeURIComponent(
                    "Olá! Gostaria de saber mais sobre os serviços de Marketing Digital da Enchantè"
                  )}`}
                  className="cta-button"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
