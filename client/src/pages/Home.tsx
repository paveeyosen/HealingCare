import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServiceSection from '@/components/home/ServiceSection';
import ProductSection from '@/components/home/ProductSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import BookingSection from '@/components/home/BookingSection';  
import FAQSection from "@/components/home/faq-section";
import ContactSection from '@/components/home/ContactSection';



const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <ProductSection />
      <AboutSection />
      <TestimonialSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
