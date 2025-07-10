import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Zap, Brain, Heart, Sparkles } from 'lucide-react';

export default function CrystalHealing() {
  const { data: services } = useQuery({
    queryKey: ['/api/services'],
  });

  const crystalHealingService = services?.find(service => service.name === 'Crystal Healing');

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, title: "Better Energy", description: "Wake up feeling refreshed and vital" },
    { icon: <Heart className="w-5 h-5" />, title: "Emotional Balance", description: "Process feelings with more ease" },
    { icon: <Brain className="w-5 h-5" />, title: "Mental Clarity", description: "Think clearer and make better decisions" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Deep Relaxation", description: "Find natural calm without trying" },
    { icon: <Heart className="w-5 h-5" />, title: "Improved Sleep", description: "Create restful nights naturally" },
    { icon: <Brain className="w-5 h-5" />, title: "Enhanced Wellbeing", description: "Feel more like yourself again" },
  ];

  const sessions = [
    {
      title: "Private Crystal Sessions",
      duration: "60/90 min",
      description: "Your personal healing sanctuary. Using carefully selected crystals and layouts, we'll create a healing experience tailored just for you.",
      benefits: ["Deep energy balancing", "Emotional release and renewal", "Chakra alignment", "Targeted healing support"]
    },
    {
      title: "Group Crystal Ceremonies",
      duration: "75 min",
      description: "Experience the amplified energy of community crystal healing. Share the transformative power of crystals in a supportive group setting.",
      benefits: ["First-time crystal healing experience", "Regular energy maintenance", "Community connection", "Accessible healing"]
    },
    {
      title: "Corporate Crystal Wellness",
      duration: "Customized",
      description: "Bring natural balance to your workplace. Our programs help reduce workplace stress and enhance team energy.",
      benefits: ["Reduce workplace stress", "Enhance team energy", "Improve focus and creativity", "Create positive space energy"]
    }
  ];

  const handleBooking = (sessionType: string) => {
    const message = `Hi! I'd like to book a ${sessionType} session. Please let me know available times.`;
    const whatsappUrl = `https://wa.me/919003179421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Crystal Healing</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Feeling Drained? Unbalanced?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Life's energy can get scattered and depleted – finding your balance shouldn't be complicated. 
            At Meraki, we use the natural power of crystals to help you realign, recharge, and restore your natural state of wellbeing.
          </p>
          <Button 
            onClick={() => handleBooking('Crystal Healing')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>

      {/* Why Crystal Healing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Crystal Healing?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Crystals have been Earth's natural healers for millions of years, and they're still powerful today because:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Each crystal carries its own unique healing frequency</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">They naturally balance your energy field</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">They work even while you rest</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">They create lasting energetic change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            The Science Behind the Magic
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              When you experience crystal healing, your body responds naturally:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your energy field becomes more coherent</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Stress patterns in your body begin to release</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your nervous system finds its natural rhythm</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your body's own healing abilities activate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Real Benefits You'll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-purple-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg text-purple-900">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Choose Your Crystal Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <Badge variant="outline" className="text-purple-700 border-purple-300">
                      {session.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-purple-900">{session.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {session.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <p className="font-medium text-purple-800 mb-2">Perfect for:</p>
                    {session.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleBooking(session.title)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Book This Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We keep it genuine, grounded, and effective. No complicated processes – just pure crystal energy, expert guidance, and real results that help you feel better.
          </p>
          <Button 
            onClick={() => handleBooking('Crystal Healing')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>
    </div>
  );
}