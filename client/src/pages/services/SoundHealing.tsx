import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Heart, Brain, Sparkles } from 'lucide-react';

export default function SoundHealing() {
  const { data: services } = useQuery({
    queryKey: ['/api/services'],
  });

  const soundHealingService = services?.find(service => service.name === 'Sound Healing');

  const benefits = [
    { icon: <Heart className="w-5 h-5" />, title: "Better Sleep", description: "Many clients report the best sleep in years after sessions" },
    { icon: <Brain className="w-5 h-5" />, title: "Stress Relief", description: "Feel the weight lift from your shoulders" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Mental Clarity", description: "Clear the brain fog and regain focus" },
    { icon: <CheckCircle className="w-5 h-5" />, title: "Emotional Balance", description: "Process feelings without getting overwhelmed" },
  ];

  const sessions = [
    {
      title: "Private Sound Sessions",
      duration: "60/90 min",
      description: "Your personal sanctuary of sound. Using Tibetan bowls, crystal bowls, and gentle gongs, we'll create a healing experience tailored just for you.",
      benefits: ["Deep relaxation and stress release", "Working through specific challenges", "Personal transformation", "Energy balancing"]
    },
    {
      title: "Group Sound Baths",
      duration: "60 min",
      description: "Experience the magic of community healing. Immerse yourself in soothing sounds while sharing energy with like-minded people.",
      benefits: ["First-time sound healing experience", "Regular stress maintenance", "Community connection", "Budget-friendly healing"]
    },
    {
      title: "Corporate Wellness",
      duration: "Customized",
      description: "Bring calm to your workplace. Our office programs help reduce workplace stress and boost team productivity.",
      benefits: ["Reduce workplace stress", "Boost team productivity", "Improve focus and creativity", "Create positive work environment"]
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
          <Badge className="mb-4 bg-purple-100 text-purple-800">Sound Healing</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-purple-900">
            Stressed? Overwhelmed?
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-purple-700">
            Let Sound Healing Guide You Back to Peace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Life's chaotic enough – finding peace shouldn't be. At Meraki, we use the gentle power of sound to help you relax, recharge, and rediscover your balance.
          </p>
          <Button 
            onClick={() => handleBooking('Sound Healing')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>

      {/* Why Sound Healing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Why Sound Healing?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Sound has been used for thousands of years across cultures for one simple reason – it works. 
              The vibrations from our instruments interact directly with your body, helping to:
            </p>
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
              When you experience sound healing, your body responds at a profound level:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your heart rate and blood pressure naturally lower</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Stress hormones decrease</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Your body moves from 'fight or flight' to 'rest and repair' mode</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <p className="text-gray-700">Brain waves shift to patterns associated with deep healing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-purple-900">
            Choose Your Path to Peace
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
                <CardTitle className="text-lg text-purple-900">What can I expect during my first sound healing session?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your first session at Meraki will be a journey of relaxation and discovery. Monikaa will guide you into a comfortable position before beginning the sound healing process using various instruments. You may experience sensations such as tingling, warmth, or profound relaxation. Each session lasts between 45 minutes to an hour, designed to align your body, mind, and spirit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Do I need any special preparation for my sound healing session?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No special preparation is required. We recommend wearing comfortable clothing and coming with an open mind and heart. If you have specific concerns or intentions you wish to address, please share them with Monikaa before your session.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">How often should I attend sound healing sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The frequency of sessions varies depending on individual needs and goals. Some clients benefit from weekly sessions, while others may prefer bi-weekly or monthly sessions. Monikaa can provide personalized recommendations based on your initial session and ongoing progress.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Can sound healing help with anxiety and depression?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, many clients find sound healing beneficial for managing anxiety, depression, and other mental health challenges. The soothing vibrations can promote relaxation, reduce stress, and enhance overall emotional well-being. However, sound healing should complement, not replace, traditional therapies and medical advice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Is sound healing suitable for everyone?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sound healing is a gentle and non-invasive practice suitable for most people. However, if you have specific health concerns or conditions, please consult with your healthcare provider before booking a session. Monikaa is also available to discuss any concerns and tailor the session to your comfort level.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-900">Can children participate in sound healing sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, children can benefit from sound healing under the guidance of a skilled practitioner like Monikaa. Sessions for children are modified to suit their age and sensitivity to sound. Parental or guardian consent and, in some cases, presence are required for participants under 18.
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
            We keep it simple, genuine, and effective. No mystical jargon – just a warm space, expert guidance, and sounds that help you feel better.
          </p>
          <Button 
            onClick={() => handleBooking('Sound Healing')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            Book Your Session Now
          </Button>
        </div>
      </section>
    </div>
  );
}