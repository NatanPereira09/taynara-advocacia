import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 300ms ease-in-out';

    setTimeout(() => {
      navigate('/termos');
      document.body.style.opacity = '1';
    }, 300);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Scale className="h-8 w-8 text-primary" />
          <span className="font-serif text-xl font-semibold text-primary">
            Taynara Paulina
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#home" label="Home" />
          <NavLink href="#quem-sou" label="Quem sou" />
          <NavLink href="#parcerias" label="Parcerias" />
          <NavLink href="#areas-atuacao" label="Áreas de Atuação" />
          <NavLink href="#consultas" label="Consultas" />
          <NavLink href="#contato" label="Contato" />
          <a
            href="/termos"
            onClick={handleSmoothNavigate}
            className="text-gray-800 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 font-medium"
          >
            Termos de uso
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#home" label="Home" onClick={closeMenu} />
            <MobileNavLink href="#quem-sou" label="Quem sou" onClick={closeMenu} />
            <MobileNavLink href="#parcerias" label="Parcerias" onClick={closeMenu} />
            <MobileNavLink href="#areas-atuacao" label="Áreas de Atuação" onClick={closeMenu} />
            <MobileNavLink href="#consultas" label="Consultas" onClick={closeMenu} />
            <MobileNavLink href="#blog" label="Blog" onClick={closeMenu} />
            <MobileNavLink href="#contato" label="Contato" onClick={closeMenu} />
            <a
              href="/termos"
              onClick={(e) => {
                closeMenu();
                handleSmoothNavigate(e);
              }}
              className="text-gray-800 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 font-medium py-2 border-b border-gray-100"
            >
              Termos de uso
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 font-medium"
    >
      {label}
    </a>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 font-medium py-2 border-b border-gray-100"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Navbar;
