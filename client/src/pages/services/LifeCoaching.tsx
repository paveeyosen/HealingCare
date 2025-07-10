import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Target, Brain, Users, TrendingUp } from 'lucide-react';

export default function LifeCoaching() {
  const { data: services } = useQuery({
    queryKey: ['/api/services'],
  });

  const lifeCoachingService = services?.find(service => service.name === 'Life Coaching');

  const benefits = [
    { icon: <Target className="w-5 h-5" />, title: "Greater Clarity", description: "Finally know what you really want" },
    { icon: <Brain className="w-5 h-5" />, title: "Better Decisions", description: "Trust your choices with confidence" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Increased Motivation", description: "Stay focused on your goals" },
    { icon: <Users className="w-5 h-5" />, title: "Stronger Relationships", description: "Improve personal and professional connections" },
  ];

  const sessions = [
    {
      title: "One-on-One Coaching",
      duration: "60/90 min",
      description: "Your personal space for transformation. Through powerful conversations and proven techniques, we'll create the change you're seeking.",
      benefits: ["Career transitions and growth", "Personal development", "Relationship enhancement", "Goal achievement", "Life direction clarity"]
    },
    {
      title: "Group Coaching Programs",
      duration: "90 min",
      description: "Experience the power of collective growth. Learn and evolve alongside others on similar journeys.",
      benefits: ["Skill development", "Peer support and learning", "Affordable coaching experience", "Community connection"]
    },
    {
      title: "Corporate Coaching",
      duration: "Customized",
      description: "Elevate your team's potential. Our workplace programs help boost leadership skills and enhance team performance.",
      benefits: ["Boost leadership skills", "Enhance team performance", "Improve communication", "Drive positive change"]
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
          <Badge className="mb-4 bg-purple-100 text-purple-800">Life Coaching</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Feeling Stuck? Uncertain?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Life's big questions shouldn't keep you awake at night. At Meraki, we help you transform confusion into clarity, 
            dreams into plans, and obstacles into stepping stones. No judgment, no cookie-cutter solutions – just genuine guidance 
            to help you create the life you want.
          </p>
          <Button 
            onClick={() => handleBooking('Life Coaching')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>

      {/* Why Life Coaching Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Life Coaching?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Life coaching works because it taps into your own inner wisdom while providing:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">A clear pathway to your goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Actionable steps you can start today</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Support when challenges arise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Tools that last a lifetime</p>
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
              When you engage in life coaching, powerful shifts happen:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your brain creates new neural pathways</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Limiting beliefs begin to dissolve</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your decision-making becomes clearer</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your confidence naturally grows</p>
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
            Choose Your Coaching Journey
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
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">What differentiates life coaching from therapy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While therapy often focuses on healing past traumas, life coaching is future-oriented, emphasizing goal setting, personal growth, and professional development. Life coaching is action-based, helping clients move forward and realize their potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">How long does the life coaching process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The duration of life coaching varies based on individual goals and progress. Some clients see significant change within a few months, while others may continue for longer to fully achieve their objectives. The process is flexible to accommodate your unique journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Can life coaching help me with my career?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! Career development is one of the key areas life coaching addresses, assisting clients in navigating career transitions, enhancing professional skills, and achieving career goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Is life coaching suitable for everyone?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Life coaching is beneficial for anyone seeking to improve their life, overcome challenges, and achieve goals. Whether you're facing a specific dilemma or seeking overall personal growth, life coaching can offer valuable guidance and support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">How do I know if life coaching is right for me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If you're looking to make positive changes in your life, achieve specific goals, or simply find greater fulfillment, life coaching could be a perfect fit. Our initial consultation will help you understand how life coaching can benefit you specifically.
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
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We keep it real, relatable, and results-focused. No high-pressure tactics – just authentic guidance and practical tools that create lasting change.
          </p>
          <Button 
            onClick={() => handleBooking('Life Coaching')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>
    </div>
  );
}