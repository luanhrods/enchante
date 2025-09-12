import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const data = {
  facebookLink: "https://facebook.com/enchantedigital",
  instaLink: "https://instagram.com/enchantedigital",
  twitterLink: "https://twitter.com/enchantedigital",
  linkedinLink: "https://linkedin.com/company/enchantedigital",
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

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-brand {
          margin-bottom: 40px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .brand-logo img {
          width: 50px;
          height: 50px;
        }

        .brand-name {
          font-family: "Lexend", sans-serif;
          font-weight: 600;
          font-size: clamp(24px, 5vw, 32px);
          color: #ffffff;
          text-align: center;
          display: block;
          text-transform: none;
          letter-spacing: 0;
          line-height: 1.2;
          margin: 0 auto;
          width: 100%;
        }

        .brand-description {
          font-family: "Lexend";
          font-size: clamp(14px, 3vw, 18px);
          line-height: 1.6;
          color: #d33682;
          margin-bottom: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
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
          border-top: 1px solid rgba(211, 54, 130, 0.2);
          padding-top: 30px;
          text-align: center;
        }

        .copyright {
          font-family: "Lexend";
          font-size: clamp(12px, 2.5vw, 14px);
          color: #aaa;
          line-height: 1.6;
          padding: 0 10px;
        }

        .copyright a {
          color: #d33682;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .copyright a:hover {
          color: #ffffff;
        }

        /* Melhorando responsividade para todos os breakpoints */
        @media screen and (max-width: 991px) {
          .ai-footer {
            padding: 50px 20px 25px;
          }
          
          .footer-brand {
            margin-bottom: 35px;
          }
          
          .brand-description {
            margin-bottom: 25px;
          }
          
          .social-links {
            gap: 18px;
            margin-bottom: 35px;
          }
          
          .footer-bottom {
            padding-top: 25px;
          }
        }

        @media screen and (max-width: 767px) {
          .ai-footer {
            padding: 40px 16px 20px;
          }
          
          .footer-brand {
            margin-bottom: 30px;
          }
          
          .brand-name {
            font-size: clamp(22px, 6vw, 28px);
          }
          
          .brand-description {
            font-size: clamp(13px, 4vw, 16px);
            margin-bottom: 20px;
          }
          
          .social-links {
            gap: 15px;
            margin-bottom: 30px;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
          }
          
          .footer-bottom {
            padding-top: 20px;
          }
        }

        @media screen and (max-width: 480px) {
          .ai-footer {
            padding: 30px 12px 15px;
          }
          
          .footer-brand {
            margin-bottom: 25px;
          }
          
          .brand-name {
            font-size: clamp(20px, 7vw, 24px);
          }
          
          .brand-description {
            font-size: clamp(12px, 4vw, 14px);
            margin-bottom: 18px;
          }
          
          .social-links {
            gap: 12px;
            margin-bottom: 25px;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
          }
          
          .social-link svg {
            width: 18px;
            height: 18px;
          }
          
          .footer-bottom {
            padding-top: 18px;
          }
          
          .copyright {
            font-size: clamp(11px, 3vw, 12px);
          }
        }

        @media screen and (max-width: 320px) {
          .ai-footer {
            padding: 25px 8px 12px;
          }
          
          .social-links {
            gap: 10px;
          }
          
          .social-link {
            width: 36px;
            height: 36px;
          }
          
          .social-link svg {
            width: 16px;
            height: 16px;
          }
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
