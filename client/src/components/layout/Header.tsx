 import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import useScrollTo from '@/lib/hooks/useScrollTo';
import merakiLogo from '@assets/Meraki_Final_logo-01-removebg-preview_1749981370801.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const scrollTo = useScrollTo();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    scrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center" style={{ height: '50px' }}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src={merakiLogo} 
              alt="Meraki - soulful life" 
              className="w-auto" style={{ height: '9.5rem' }}
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" style={{ fontSize: '20px' }}>
          <button  
            onClick={() => handleNavClick('home')} 
            className={`${location === '/' ? 'text-purple-700' : 'text-gray-600'} font-medium hover:text-purple-500 transition-all`}
          >
            Home
          </button>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-gray-600 font-medium hover:text-purple-500 transition-all"
            >
              Services
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link 
                  href="/services/sound-healing" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Sound Healing
                </Link>
                <Link 
                  href="/services/crystal-healing" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Crystal Healing
                </Link>
                <Link 
                  href="/services/life-coaching" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Life Coaching
                </Link>
                <Link 
                  href="/services/fingerprint-analysis" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Fingerprint Analysis
                </Link>
                <Link 
                  href="/services/counseling-therapy" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Counseling Therapy
                </Link>
                <Link 
                  href="/services/numerology" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  Numerology
                </Link>
                <Link 
                  href="/services/doterra-oils" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  doTERRA Essential Oils
                </Link>
                <hr className="my-2 border-gray-200" />
                <Link 
                  href="/services" 
                  className="block px-4 py-2 text-purple-600 font-medium hover:bg-purple-50 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => handleNavClick('products')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Products
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('testimonials')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Testimonials
          </button>
           <button 
            onClick={() => handleNavClick('faq')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            FAQ
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Contact
          </button>
        </nav>
        
        <Button 
          onClick={() => handleNavClick('booking')} 
          className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white rounded-full"
        >
          Book Now
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="px-4 py-3 bg-white md:hidden">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`${location === '/' ? 'text-purple-700' : 'text-gray-600'} font-medium text-left`}
            >
              Home
            </button>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                className="text-gray-600 font-medium text-left w-full"
              >
                Services
              </button>
              
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link 
                    href="/services/sound-healing" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sound Healing
                  </Link>
                  <Link 
                    href="/services/crystal-healing" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Crystal Healing
                  </Link>
                  <Link 
                    href="/services/life-coaching" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Life Coaching
                  </Link>
                  <Link 
                    href="/services/fingerprint-analysis" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fingerprint Analysis
                  </Link>
                  <Link 
                    href="/services/counseling-therapy" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Counseling Therapy
                  </Link>
                  <Link 
                    href="/services/numerology" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Numerology
                  </Link>
                  <Link 
                    href="/services/doterra-oils" 
                    className="block text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    doTERRA Essential Oils
                  </Link>
                  <Link 
                    href="/services" 
                    className="block text-purple-600 font-medium hover:text-purple-700 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handleNavClick('products')} 
              className="text-gray-600 font-medium text-left"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-600 font-medium text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')} 
              className="text-gray-600 font-medium text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-600 font-medium text-left"
            >
              Contact
            </button>
            <Button 
              onClick={() => handleNavClick('booking')} 
              className="bg-purple-600 text-white rounded-full w-full"
            >
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
