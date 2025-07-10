import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Droplets, Leaf, Shield, Zap, Heart, Moon, Sparkles } from 'lucide-react';

export default function DoterraOils() {
  const benefits = [
    { icon: <Moon className="w-5 h-5" />, title: "Better Sleep", description: "Natural support for restful nights" },
    { icon: <Heart className="w-5 h-5" />, title: "Stress Relief", description: "Calm your mind naturally" },
    { icon: <Shield className="w-5 h-5" />, title: "Immune Support", description: "Strengthen your body's defenses" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Enhanced Mood", description: "Uplift your spirits daily" },
    { icon: <Droplets className="w-5 h-5" />, title: "Physical Comfort", description: "Soothe temporary discomfort" },
    { icon: <Zap className="w-5 h-5" />, title: "Natural Energy", description: "Support without stimulants" },
  ];

  const sessions = [
    {
      title: "Personal Oil Consultation",
      duration: "45 min",
      description: "Your personalized essential oil plan. We'll explore your wellness goals and create a custom oil protocol just for you.",
      benefits: ["Starting your oil journey", "Addressing specific concerns", "Creating daily wellness routines", "Learning safe oil usage"]
    },
    {
      title: "Essential Oil Workshops",
      duration: "90 min",
      description: "Learn in a fun, interactive group setting.",
      benefits: ["Understanding oil basics", "Making natural products", "Learning diffuser blends", "Creating healthy habits"]
    },
    {
      title: "Wellness Support Programs",
      duration: "Ongoing",
      description: "Ongoing guidance for your health journey.",
      benefits: ["Monthly oil education", "Custom blend creation", "Lifestyle integration", "Regular wellness check-ins"]
    }
  ];

  const singleOils = [
    { name: "Lavender", description: "Nature's calming touch", icon: <Droplets className="w-5 h-5" /> },
    { name: "Peppermint", description: "Cool, invigorating support", icon: <Leaf className="w-5 h-5" /> },
    { name: "Lemon", description: "Clean, fresh energy", icon: <Zap className="w-5 h-5" /> },
    { name: "Tea Tree", description: "Natural purifying power", icon: <Shield className="w-5 h-5" /> },
  ];

  const signatureBlends = [
    { name: "Deep Blue®", description: "Soothing comfort", icon: <Droplets className="w-5 h-5" /> },
    { name: "On Guard®", description: "Immune support", icon: <Shield className="w-5 h-5" /> },
    { name: "Serenity®", description: "Peaceful rest", icon: <Moon className="w-5 h-5" /> },
    { name: "DigestZen®", description: "Digestive ease", icon: <Heart className="w-5 h-5" /> },
  ];

  const handleBooking = (sessionType: string) => {
    const message = `Hi! I'd like to book a ${sessionType} session. Please let me know available times.`;
    const whatsappUrl = `https://wa.me/919003179421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShopOils = () => {
    const message = `Hi! I'm interested in learning more about doTERRA essential oils. Can you help me get started?`;
    const whatsappUrl = `https://wa.me/919003179421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">doTERRA Essential Oils</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Ready to Transform Your Wellbeing Naturally?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Looking for natural solutions for your daily wellness? At Meraki, we bring you doTERRA's pure, 
            potent essential oils to support your body, mind, and spirit. No complicated protocols – just pure, 
            natural solutions that work.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => handleBooking('Essential Oil Consultation')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              Book Consultation
            </Button>
            <Button 
              onClick={handleShopOils}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            >
              Shop Oils Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why doTERRA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why doTERRA Essential Oils?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              These aren't just any essential oils. doTERRA stands apart because:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Every oil is rigorously tested for purity</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Sourced sustainably from their native regions</p>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Highly concentrated and effective</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Safe for the whole family</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Ethically harvested and produced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Behind the Magic */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            The Science Behind the Magic
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Essential oils work with your body naturally:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Molecules small enough to penetrate cells</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Direct access to the limbic system through scent</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Support natural body processes</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Work in harmony with your body's systems</p>
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
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Popular Products Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Popular doTERRA Products We Love
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Single Oils */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Single Oils
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {singleOils.map((oil, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                        {oil.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900">{oil.name}</h4>
                        <p className="text-gray-600 text-sm">{oil.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Signature Blends */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Signature Blends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {signatureBlends.map((blend, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                        {blend.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900">{blend.name}</h4>
                        <p className="text-gray-600 text-sm">{blend.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Choose Your Essential Oil Journey
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
            Ready to Start Your Natural Wellness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We keep it simple, safe, and effective. No overwhelm – just clear guidance on using these powerful natural tools for your family's wellness.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleShopOils}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            >
              Shop Oils Now
            </Button>
            <Button 
              onClick={() => handleBooking('Essential Oil Consultation')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}