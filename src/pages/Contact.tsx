import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Mic,
  Users,
  Headphones
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Need Help? We're Here
          </h1>
          <p className="font-noto-hindi text-2xl md:text-4xl text-white/90 mb-6">
            मदद चाहिए? हम हैं।
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team supports you in Hindi and English. Get instant help for pickups, payments, or partnerships.
          </p>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone */}
            <Card className="group hover:shadow-green transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Now</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">अभी कॉल करें</p>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="group hover:shadow-green transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">व्हाट्सऐप</p>
                <Button 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919876543210">
                    Message Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-green transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">ईमेल</p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:contact@saubhagya.com">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">हमें संदेश भेजें</p>
          </div>
          
          <Card className="bg-gradient-warm p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Name / नाम
                    </Label>
                    <Input 
                      id="name"
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      Phone / फोन
                    </Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="village" className="text-sm font-medium text-card-foreground">
                    Village/City / गांव/शहर
                  </Label>
                  <Input 
                    id="village"
                    placeholder="Your location"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message / संदेश
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="How can we help you? / हम आपकी कैसे मदद कर सकते हैं?"
                    rows={5}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="mailto:contact@saubhagya.com?subject=Contact Form Message">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message / संदेश भेजें
                  </a>
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
                <p className="text-sm text-card-foreground text-center">
                  <strong>Note:</strong> This is a static form. Click "Send Message" to open your email client with the details filled in.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Field Support */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Field Support</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">फील्ड सहायता</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Voice Message */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Mic className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Record Voice Message</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">आवाज़ संदेश रिकॉर्ड करें</p>
                <p className="text-card-foreground mb-6">
                  Call our helpline and leave a voice message in Hindi or English. 
                  Our team will call you back within 2 hours.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Headphones className="mr-2 h-5 w-5" />
                    Call to Record
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Local Support */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Support Team</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">स्थानीय सहायता टीम</p>
                <p className="text-card-foreground mb-6">
                  Our field representatives visit gaushalas regularly to ensure 
                  smooth operations and address any concerns directly.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919876543210?text=I%20need%20local%20support">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Request Visit
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Office Details */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Office Address</h3>
                </div>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">कार्यालय का पता</p>
                <div className="space-y-3 text-card-foreground">
                  <p className="font-semibold">Shri Krishna Yogeshwar Gaushala</p>
                  <p>Agar Malwa, Madhya Pradesh</p>
                  <p>India - 465441</p>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-semibold text-lg">Operating Hours</h4>
                  </div>
                  <p className="font-noto-hindi text-sm text-muted-foreground mb-2">संचालन का समय</p>
                  <div className="space-y-1 text-card-foreground">
                    <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-muted-foreground">24/7 WhatsApp support available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-warm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-6">संपर्क जानकारी</p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MessageCircle className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="https://wa.me/919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@saubhagya.com" className="text-primary hover:underline">
                        contact@saubhagya.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Language Support</h4>
                  <p className="font-noto-hindi text-sm text-muted-foreground mb-1">भाषा सहायता</p>
                  <p className="text-sm text-card-foreground">
                    Hindi & English support available. Response within 24 hours guaranteed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-saubhagya-earth text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-bold text-xl mb-2">Project Saubhagya</h3>
          <p className="font-noto-hindi text-lg mb-4">प्रोजेक्ट सौभाग्य</p>
          <p className="text-white/80 mb-6">
            Empowering farmers through cow-centered biogas solutions
          </p>
          <div className="flex justify-center space-x-6">
            <a href="tel:+919876543210" className="text-white/80 hover:text-white">
              +91 98765 43210
            </a>
            <a href="mailto:contact@saubhagya.com" className="text-white/80 hover:text-white">
              contact@saubhagya.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;