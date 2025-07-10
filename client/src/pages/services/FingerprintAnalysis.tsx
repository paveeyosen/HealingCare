import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Fingerprint, Brain, Users, Target } from 'lucide-react';

export default function FingerprintAnalysis() {
  const { data: services } = useQuery({
    queryKey: ['/api/services'],
  });

  const fingerprintAnalysisService = services?.find(service => service.name === 'Fingerprint Analysis');

  const benefits = [
    { icon: <Brain className="w-5 h-5" />, title: "Deep Self-Understanding", description: "Finally understand why you think and act the way you do" },
    { icon: <Target className="w-5 h-5" />, title: "Career Clarity", description: "Discover work that aligns with your true purpose" },
    { icon: <Users className="w-5 h-5" />, title: "Better Relationships", description: "Understand your interaction patterns" },
    { icon: <Fingerprint className="w-5 h-5" />, title: "Enhanced Confidence", description: "Trust your natural gifts and abilities" },
  ];

  const sessions = [
    {
      title: "Personal Fingerprint Reading",
      duration: "90 min",
      description: "Your comprehensive fingerprint analysis session. We'll explore your unique patterns and translate them into practical life guidance.",
      benefits: ["Life purpose discovery", "Career direction", "Relationship understanding", "Personal development planning", "Decision making support"]
    },
    {
      title: "Couples Analysis",
      duration: "120 min",
      description: "Understand your relationship dynamics through both partners' fingerprints. Perfect for deepening understanding and improving communication.",
      benefits: ["Deepening relationship understanding", "Improving communication", "Resolving conflicts naturally", "Building stronger connections"]
    },
    {
      title: "Corporate Talent Analysis",
      duration: "Customized",
      description: "Help your team excel by understanding their natural strengths. Our programs support team building and leadership development.",
      benefits: ["Team building", "Role alignment", "Career development", "Leadership potential identification"]
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
          <Badge className="mb-4 bg-purple-100 text-purple-800">Fingerprint Analysis</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Curious About Your True Potential?
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-purple-700">
            Let Your Fingerprints Reveal Your Life Purpose
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ever wondered why you're drawn to certain paths in life? Your fingerprints hold the key. 
            At Meraki, we unlock the ancient wisdom hidden in your unique fingerprint patterns to reveal 
            your life purpose, natural talents, and authentic path. No guesswork, just clear insights based on your personal blueprint.
          </p>
          <Button 
            onClick={() => handleBooking('Fingerprint Analysis')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Analysis Now
          </Button>
        </div>
      </section>

      {/* Why Fingerprint Analysis Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Fingerprint Analysis?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Your fingerprints are more than just identification marks - they're your soul's blueprint, formed before birth, containing insights about:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your true life purpose</p>
                </div>
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Natural talents and gifts</p>
                </div>
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Core challenges to overcome</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Ideal career paths</p>
                </div>
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Relationship patterns</p>
                </div>
                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Personal growth opportunities</p>
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
              Fingerprint analysis combines ancient wisdom with modern understanding:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Patterns form at 13-19 weeks in the womb</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Each pattern represents specific life themes</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">No two prints are exactly alike</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Patterns remain unchanged throughout life</p>
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
            Choose Your Analysis Journey
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Answers to Your Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">How is fingerprint analysis uniquely informative?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our method provides objective, biological insights based on your fingerprints, offering a level of personalization that self-assessment tests cannot match.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Can I trust the process?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes. Our analysis is grounded in the proven science of dermatoglyphics and multiple intelligences, ensuring reliable and actionable insights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Will this help me choose a better career?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely. By aligning your career with your innate strengths, you're more likely to achieve satisfaction and success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Why is this important for children?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Early insights can guide a child's educational and personal development in a direction that complements their natural predispositions, fostering growth and confidence from a young age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Discover Your Blueprint?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We keep it practical, precise, and powerful. No vague predictions – just clear insights based on your unique fingerprint patterns that help you make better life choices.
          </p>
          <Button 
            onClick={() => handleBooking('Fingerprint Analysis')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Analysis Now
          </Button>
        </div>
      </section>
    </div>
  );
}