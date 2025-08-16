import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
    
    question: "What healing services do you offer?",
    answer: "We offer four main healing modalities: Sound Healing using therapeutic sound vibrations from Tibetan singing bowls; Crystal Healing that harnesses the natural energy of crystals to balance chakras; Aromatherapy combining therapeutic-grade essential oils with gentle massage; and Mindfulness Meditation with guided sessions for stress reduction and inner peace.",
    
  },
  {
    
    question: "How long does each healing session last?",
    answer: "Session lengths vary by service: Sound Healing (60-90 minutes), Crystal Healing (75-90 minutes), Aromatherapy (60-75 minutes), and Meditation (30-45 minutes). All sessions include a brief consultation to understand your specific needs and preferences.",
    
  },
  {
    
    question: "How do I book a session?",
    answer: "You can book through our online booking form available 24/7, call us during business hours, send us a WhatsApp message, or email us with your preferences. We'll confirm availability and provide all session details.",
    
  },
  {
    
    question: "What is your cancellation policy?",
    answer: "We require 24+ hours notice for full refund or free rescheduling. 12-24 hours notice incurs a 50% session fee, and less than 12 hours notice incurs the full session fee. Emergency situations are considered case-by-case.",
    
  },
  {
    
    question: "How do I order DoTerra essential oils?",
    answer: "Browse our products section, click 'Order via WhatsApp' on any product, send us a message with your selection and quantity. We'll confirm availability, provide total cost including shipping, share secure payment options, and ship within 2-3 business days.",
    
  },
  {
    
    question: "What are your session prices?",
    answer: "Individual sessions: Sound Healing ($85), Crystal Healing ($95), Aromatherapy ($75), Mindfulness Meditation ($45). We offer package deals: 3-Session Package (15% off), 6-Session Package (25% off), and Monthly Membership ($120 for 2 sessions + 10% off products).",
     
  }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about our software development services and process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <i className="fas fa-chevron-down text-blue-600"></i>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed" data-testid={`faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              data-testid="contact-us-button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}