import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';
import { Service } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useScrollTo from '@/lib/hooks/useScrollTo';
import { Link } from 'wouter';

const ServiceSection = () => {
  const scrollTo = useScrollTo();
  
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  const getServiceRoute = (serviceName: string) => {
    const routes: { [key: string]: string } = {
      'Sound Healing': '/services/sound-healing',
      'Crystal Healing': '/services/crystal-healing',
      'Life Coaching': '/services/life-coaching',
      'Fingerprint Analysis': '/services/fingerprint-analysis',
      'Counseling Therapy': '/services/counseling-therapy',
      'Numerology': '/services/numerology',
      'doTERRA Essential Oils': '/services/doterra-oils'
    };
    return routes[serviceName] || '/services';
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading services...</p>
        </div>
      </section>
    );
  }

  if (error || !services) {
    return (
      <section id="services" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <p>Error loading services. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-purple-800">
            Our Healing Services
          </h2>
          <p className="text-lg text-gray-600">
            Discover our range of holistic healing services designed to promote wellness and balance in your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Card key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <img 
                src={service.image} 
                alt={`${service.name} service`} 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 text-purple-800">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-purple-600 font-medium">{service.duration}</span>
                </div>
                <div className="flex gap-3">
                  <Link href={getServiceRoute(service.name)}>
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => scrollTo('booking')}
                    variant="outline" 
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
