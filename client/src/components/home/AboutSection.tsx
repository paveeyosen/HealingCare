import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import monikkaaPhoto from '@assets/Meraki 3-2_1749982719833.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img 
              src={monikkaaPhoto} 
              alt="Monikaa, Holistic Healing Practitioner" 
              className="w-full h-auto shadow-md max-w-md mx-auto" style={{ borderRadius: '17.5rem' }} 
            />
          </div>
          
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-purple-800">Our Story</h2>
            <h3 className="text-2xl font-medium mb-6 text-purple-600">Meraki Soulful Life</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Monikaa's journey into healing began with her own transformation. What started as personal growth became a calling to help others find their path to wellness. With 12 years of professional experience in healing and counseling, she has created a space where holistic wellness isn't just a treatment - it's a way of life.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Understanding that each person's journey is unique, Monikaa expanded her expertise into Fingerprint Analysis, Numerology, Sound Healing, and Crystal Healing. Her approach combines ancient wisdom with modern understanding, helping clients discover their authentic selves and unlock their natural healing potential.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Meraki, we believe healing should be accessible, genuine, and transformative. Through personalized sessions and authentic guidance, Monikaa helps you navigate life's challenges and discover the peaceful, balanced life you deserve.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
