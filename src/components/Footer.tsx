import { FaLinkedin, FaTwitter, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bmalagadtaula/" },
    // { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/bimalagadtaula" },
    { icon: FaBehance, label: "Behance", href: "https://www.behance.net/bimalagadtaula" },
  ];

  return (
    <footer className="bg-background border-t border-border py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left max-w-md">
          <h3 className="text-2xl font-bold tracking-tight mb-1 uppercase neon-glow bg-clip-text gradient-text-neon font-display">
            Bimala Gadtaula
          </h3>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-white/10 hover:bg-pinkCustom hover:text-white shadow-md hover:shadow-pinkCustom transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div
        className="max-w-screen-xl mx-auto mt-10 pt-6 border-t border-primary text-center text-sm text-gray-400 select-none"
        style={{
          textShadow:
            "0 0 4px rgba(0,132,255,0.3), 0 0 8px rgba(0,132,255,0.15)",
        }}
      >
        &copy; 2025 Bimala Gadtaula. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
