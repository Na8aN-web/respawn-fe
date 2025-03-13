import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../../assets/logo.png';

// Update the interface to properly type the currentPage prop
interface NavbarProps {
  currentPage?: 'login' | 'signup' | 'landing';
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage = 'landing', 
  onLoginClick, 
  onSignupClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Support', href: '#' },
  ];

  // Determine which buttons to show based on current page
  const renderButtons = () => {
    switch(currentPage) {
      case 'login':
        return (
          <button
            onClick={onSignupClick}
            className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors"
          >
            Create Account
          </button>
        );
      case 'signup':
        return (
          <button
            onClick={onLoginClick}
            className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors"
          >
            Login
          </button>
        );
      case 'landing':
      default:
        return (
          <div className="flex space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="bg-[#7C3AED] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Create Account
            </button>
          </div>
        );
    }
  };

  // Render mobile buttons with the same logic
  const renderMobileButtons = () => {
    switch(currentPage) {
      case 'login':
        return (
          <button
            onClick={() => {
              onSignupClick?.();
              setIsMenuOpen(false);
            }}
            className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors mx-3"
          >
            Create Account
          </button>
        );
      case 'signup':
        return (
          <button
            onClick={() => {
              onLoginClick?.();
              setIsMenuOpen(false);
            }}
            className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors mx-3"
          >
            Login
          </button>
        );
      case 'landing':
      default:
        return (
          <>
            <button
              onClick={() => {
                onLoginClick?.();
                setIsMenuOpen(false);
              }}
              className="bg-[#263549] text-white px-6 py-2 rounded-lg border-[1px] border-[#7C3AED] hover:bg-[#7C3AED] transition-colors mx-3 mb-2"
            >
              Login
            </button>
            <button
              onClick={() => {
                onSignupClick?.();
                setIsMenuOpen(false);
              }}
              className="bg-[#7C3AED] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors mx-3"
            >
              Create Account
            </button>
          </>
        );
    }
  };

  return (
    <nav className="bg-[#263549] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src='/logo.png' alt="respawn logo" className="object-cover" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-[16px] text-[#C9C9C9] font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white px-3 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:block">
            {renderButtons()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#C9C9C9] hover:text-white px-3 py-2 text-[16px] font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {renderMobileButtons()}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;