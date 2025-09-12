import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const data = {
  facebookLink: "",
  instaLink: "https://instagram.com/enchante.digital",
  twitterLink: "",
  linkedinLink: "https://www.linkedin.com/company/enchantedigital/",
  company: {
    name: "Enchantè",
    description: "Porque sua ideia merece visibilidade.",
  },
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Linkedin, label: "LinkedIn", href: data.linkedinLink },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #073642;
          position: relative;
          overflow: hidden;
          padding: 60px 30px 30px;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
        }
        
        /* --- INÍCIO DA SOLUÇÃO DEFINITIVA --- */

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          
          /* Força a centralização de todos os itens filhos */
          display: flex;
          flex-direction: column;
          align-items: center; 
          text-align: center;
        }

        .footer-brand {
          margin-bottom: 40px;
          width: 100%; /* Garante que o contêiner ocupe o espaço */

          /* Organiza os itens da marca em uma coluna centralizada */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .brand-logo {
          margin-bottom: 20px;
          /* Centralização Flexbox clássica e robusta */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand-name {
          /* Versão mais simples e limpa, para ser controlada pelo flex pai */
          font-family: "Lexend", sans-serif;
          font-weight: 600;
          font-size: clamp(24px, 5vw, 32px);
          color: #ffffff;
          text-transform: none;
          letter-spacing: 0;
          line-height: 1.2;
        }

        /* --- FIM DA SOLUÇÃO DEFINITIVA --- */

        .brand-description {
          font-family: "Lexend";
          font-size: clamp(14px, 3vw, 18px);
          line-height: 1.6;
          color: #d33682;
          margin-bottom: 30px;
          max-width: 500px;
          padding: 0 10px;
        }

        .social-links {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(211, 54, 130, 0.2), rgba(203, 75, 22, 0.1));
          border: 1px solid rgba(211, 54, 130, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d33682;
          text-decoration: none;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #d33682, #cb4b16);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(211, 54, 130, 0.4);
        }

        .footer-bottom {
          width: 100%;
          border-top: 1px solid rgba(211, 54, 130, 0.2);
          padding-top: 30px;
        }

        .copyright {
          font-family: "Lexend";
          font-size: clamp(12px, 2.5vw, 14px);
          color: #aaa;
          line-height: 1.6;
          padding: 0 10px;
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="brand-name">Enchantè</span>
            </div>
            <p className="brand-description">{data.company.description}</p>
            <div className="social-links">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; 2025 Enchantè - Transformando marcas, criando resultados. Porque sua ideia merece visibilidade. // v5.01A</p>
          </div>
        </div>
      </footer>
    </>
  )
}
