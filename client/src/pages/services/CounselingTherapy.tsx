import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Heart, Brain, Users, Shield } from 'lucide-react';

export default function CounselingTherapy() {
  const benefits = [
    { icon: <Heart className="w-5 h-5" />, title: "Emotional Relief", description: "Finally feel lighter and more at peace" },
    { icon: <Users className="w-5 h-5" />, title: "Better Relationships", description: "Improve connections with others and yourself" },
    { icon: <Shield className="w-5 h-5" />, title: "Increased Confidence", description: "Trust yourself and your decisions" },
    { icon: <Brain className="w-5 h-5" />, title: "Stress Management", description: "Handle life's challenges with new tools" },
    { icon: <Heart className="w-5 h-5" />, title: "Personal Growth", description: "Understand yourself on a deeper level" },
    { icon: <Shield className="w-5 h-5" />, title: "Inner Peace", description: "Find harmony in your daily life" },
  ];

  const sessions = [
    {
      title: "Individual Therapy",
      duration: "60 min",
      description: "Your private space for healing and growth. Through compassionate conversation and proven techniques, we'll help you navigate life's challenges.",
      benefits: ["Anxiety and stress management", "Depression and mood support", "Relationship challenges", "Personal growth", "Life transitions", "Trauma healing"]
    },
    {
      title: "Couples Counseling",
      duration: "90 min",
      description: "Build stronger, healthier relationships together.",
      benefits: ["Improving communication", "Resolving conflicts", "Deepening connection", "Pre-marriage counseling", "Relationship enhancement"]
    },
    {
      title: "Group Therapy Sessions",
      duration: "60 min",
      description: "Find strength and support in shared experiences.",
      benefits: ["Peer support and understanding", "Shared learning opportunities", "Affordable therapy option", "Community connection"]
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
          <Badge className="mb-4 bg-purple-100 text-purple-800">Counseling Therapy</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Need Someone to Talk To?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Life's challenges can feel overwhelming, but you don't have to face them alone. 
            At Meraki, we provide a safe, non-judgmental space where you can explore your feelings, 
            heal from past experiences, and build a stronger, more resilient you. No labels, no pressure – 
            just genuine support when you need it most.
          </p>
          <Button 
            onClick={() => handleBooking('Counseling Therapy')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>

      {/* Why Counseling Therapy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Counseling Therapy?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Therapy works because it provides what we all need during difficult times:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">A safe space to be completely yourself</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Professional guidance without judgment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Tools to handle life's challenges</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Support for lasting positive change</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Understanding of your thoughts and feelings</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Confidential and compassionate care</p>
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
              When you engage in therapy, powerful healing happens:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your brain forms healthier thought patterns</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Stress responses begin to regulate</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Emotional awareness deepens</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Coping skills strengthen naturally</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Relationships improve organically</p>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Self-compassion and acceptance grow</p>
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
            Choose Your Healing Journey
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
                <CardTitle className="text-lg text-purple-900">How do I know if I need counseling or therapy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If you're facing challenges that affect your emotional well-being, relationships, or daily functioning, 
                  seeking professional support can provide relief and promote healing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">What can I expect from my first session?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The first session is an opportunity to share your story, understand the therapeutic process, 
                  and begin forging a path toward your goals in a supportive, non-judgmental environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">How long does therapy typically last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The duration of therapy varies based on individual needs and goals. Some see significant progress in a short period, while others may benefit from longer-term support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Is therapy confidential?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely. Confidentiality is a cornerstone of our practice, ensuring a safe space for you to explore and grow.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Can therapy really help me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes. Countless individuals have found therapy to be a transformative process that enhances their understanding of themselves, improves their coping strategies, and enriches their overall quality of life.
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
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step toward emotional wellness and personal growth. Your journey to healing starts with a single conversation.
          </p>
          <Button 
            onClick={() => handleBooking('Counseling Therapy')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>
    </div>
  );
}