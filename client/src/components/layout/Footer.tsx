import { Link } from 'wouter';
import useScrollTo from '@/lib/hooks/useScrollTo';

const Footer = () => {
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
  };

  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Meraki Soulful Life</h3>
            <p className="text-purple-200 mb-6">
              Empowering holistic wellness through the healing arts. Your journey to balance and harmony begins here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('testimonials')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/sound-healing" className="text-purple-200 hover:text-white transition-all">
                  Sound Healing
                </Link>
              </li>
              <li>
                <Link href="/services/crystal-healing" className="text-purple-200 hover:text-white transition-all">
                  Crystal Healing
                </Link>
              </li>
              <li>
                <Link href="/services/life-coaching" className="text-purple-200 hover:text-white transition-all">
                  Life Coaching
                </Link>
              </li>
              <li>
                <Link href="/services/fingerprint-analysis" className="text-purple-200 hover:text-white transition-all">
                  Fingerprint Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/counseling-therapy" className="text-purple-200 hover:text-white transition-all">
                  Counseling Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/numerology" className="text-purple-200 hover:text-white transition-all">
                  Numerology
                </Link>
              </li>
              <li>
                <Link href="/services/doterra-oils" className="text-purple-200 hover:text-white transition-all">
                  doTERRA Oils
                </Link>
              </li>
            </ul>
          </div>
          

        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Meraki Soulful Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
