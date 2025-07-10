import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Hash, Target, Heart, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function Numerology() {
  const benefits = [
    { icon: <Target className="w-5 h-5" />, title: "Clear Direction", description: "Understand your life's true purpose" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Better Timing", description: "Know when to take action" },
    { icon: <Heart className="w-5 h-5" />, title: "Enhanced Relationships", description: "Find compatible connections" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Career Guidance", description: "Choose aligned opportunities" },
    { icon: <Hash className="w-5 h-5" />, title: "Personal Growth", description: "Work with your natural cycles" },
    { icon: <Users className="w-5 h-5" />, title: "Decision Making", description: "Trust your choices with confidence" },
  ];

  const sessions = [
    {
      title: "Personal Numerology Reading",
      duration: "60/90 min",
      description: "Your comprehensive numerology consultation. We'll explore your core numbers and translate them into practical guidance.",
      benefits: ["Life purpose discovery", "Understanding personal years", "Relationship compatibility", "Career direction", "Important life decisions"]
    },
    {
      title: "Relationship Numerology",
      duration: "90 min",
      description: "Understand relationship dynamics through numbers.",
      benefits: ["Couples seeking deeper understanding", "Business partnerships", "Family dynamics", "Friend compatibility", "Team harmony"]
    },
    {
      title: "Business Numerology",
      duration: "60 min",
      description: "Optimize your business with numerical insights.",
      benefits: ["Best dates for launches", "Company name analysis", "Team compatibility", "Strategic timing", "Growth cycles"]
    }
  ];

  const coreNumbers = [
    { title: "Life Path Number", description: "Your main life purpose" },
    { title: "Expression Number", description: "Your natural talents" },
    { title: "Soul Urge Number", description: "Your heart's desires" },
    { title: "Birthday Number", description: "Your special gifts" },
    { title: "Personal Year", description: "Your current life cycle" }
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
          <Badge className="mb-4 bg-purple-100 text-purple-800">Numerology</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Searching for Life's Hidden Patterns?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let Numbers Illuminate Your Path. Ever wondered why certain numbers keep appearing in your life? 
            At Meraki, we decode the ancient wisdom of numbers to reveal your life's purpose, natural talents, 
            and upcoming opportunities. No complex math needed – just clear insights based on your personal numbers.
          </p>
          <Button 
            onClick={() => handleBooking('Numerology')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Reading Now
          </Button>
        </div>
      </section>

      {/* Why Numerology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Numerology?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Numbers carry vibrations that influence every aspect of our lives:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">They reveal your innate talents and challenges</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Show the best timing for important decisions</p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Uncover your life's true purpose</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Highlight compatible relationships</p>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Guide career and personal choices</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Show cycles and timing in your life</p>
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
              When you understand your numbers, life patterns become clear:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Each number carries specific energetic frequencies</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your birth date creates your life path number</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your name converts to revealing number patterns</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hash className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Numbers show cycles and timing in your life</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Universal patterns align with personal numbers</p>
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

      {/* Your Core Numbers Section */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Your Core Numbers Reveal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreNumbers.map((number, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
                    <Hash className="w-5 h-5" />
                    {number.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {number.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Choose Your Numerology Journey
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
            Ready to Decode Your Numbers?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We keep it practical, clear, and empowering. No complicated calculations – just meaningful insights that help you make better life choices.
          </p>
          <Button 
            onClick={() => handleBooking('Numerology')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Reading Now
          </Button>
        </div>
      </section>
    </div>
  );
}