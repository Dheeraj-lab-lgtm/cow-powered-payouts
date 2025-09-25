import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale,
  Smartphone,
  Truck,
  FileText,
  BarChart3,
  HelpCircle,
  Phone,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Farmer Services",
      titleHi: "किसान सेवाएं",
      description: "IoT-verified weighing and instant payment processing",
      benefits: [
        "Real-time weighing with IoT sensors",
        "Same-day payment processing",
        "Zero dispute transparent system"
      ],
      example: "Ravi from Agar Malwa now earns ₹500 extra daily through transparent weighing"
    },
    {
      icon: Smartphone,
      title: "Cluster & Plant Operations",
      titleHi: "क्लस्टर और प्लांट संचालन",
      description: "Smart monitoring and automated biogas production",
      benefits: [
        "24/7 plant monitoring via IoT",
        "Automated quality control",
        "Predictive maintenance alerts"
      ],
      example: "Agar Malwa plant achieves 95% uptime with our smart monitoring system"
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      titleHi: "परिवहन और रसद",
      description: "GPS-tracked collection and delivery services",
      benefits: [
        "Scheduled pickup from gaushalas",
        "Real-time GPS tracking",
        "Optimized route planning"
      ],
      example: "Daily collection from 25 gaushalas across 50km radius in Agar Malwa"
    },
    {
      icon: FileText,
      title: "UrjaVyapar (Energy Trading)",
      titleHi: "ऊर्जा व्यापार",
      description: "PESO-compliant CBG contracts and delivery",
      benefits: [
        "PESO-certified quality assurance",
        "Flexible contract terms",
        "Reliable supply guarantee"
      ],
      example: "Supplying 2000 kg CBG monthly to local industrial buyers"
    },
    {
      icon: BarChart3,
      title: "Admin & Analytics",
      titleHi: "प्रशासन और विश्लेषण",
      description: "Comprehensive dashboard and reporting system",
      benefits: [
        "Real-time production dashboard",
        "Farmer payment tracking",
        "Environmental impact reports"
      ],
      example: "Monthly reports show 40% methane emission reduction in pilot area"
    }
  ];

  const faqs = [
    {
      question: "How do farmers get paid?",
      questionHi: "किसानों को भुगतान कैसे मिलता है?",
      answer: "Through IoT-verified weighing followed by same-day digital payment to bank accounts."
    },
    {
      question: "How to request pickup?",
      questionHi: "पिकअप का अनुरोध कैसे करें?",
      answer: "Call our helpline or WhatsApp to schedule pickup from your gaushala."
    },
    {
      question: "Who buys the CBG?",
      questionHi: "CBG कौन खरीदता है?",
      answer: "Local industries, transport companies, and businesses seeking clean energy solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <p className="font-noto-hindi text-2xl text-muted-foreground mb-6">हमारी सेवाएं</p>
          <p className="text-lg text-card-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cow-centered biogas solutions covering every aspect from 
            dung collection to CBG delivery and farmer payments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-green transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <p className="font-noto-hindi text-sm text-muted-foreground">{service.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-card-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-warm p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-primary mb-1">Example:</h5>
                    <p className="text-xs text-card-foreground">{service.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">अक्सर पूछे जाने वाले प्रश्न</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary mb-1">{faq.question}</h3>
                      <p className="font-noto-hindi text-sm text-muted-foreground mb-3">{faq.questionHi}</p>
                      <p className="text-card-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How Our Services Work Together</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">हमारी सेवाएं कैसे मिलकर काम करती हैं</p>
          </div>
          
          <Card className="bg-gradient-warm p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Collection & Weighing</h3>
                  <p className="text-sm text-card-foreground">IoT sensors ensure accurate, transparent measurement at each gaushala</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Processing & Quality</h3>
                  <p className="text-sm text-card-foreground">Advanced biogas plants convert dung to PESO-compliant CBG</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Payment & Delivery</h3>
                  <p className="text-sm text-card-foreground">Farmers get paid while corporates receive reliable CBG supply</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="font-noto-hindi text-xl mb-8">शुरू करने के लिए तैयार हैं?</p>
          <p className="text-lg mb-8 opacity-90">
            Contact us to request pickup services or explore partnership opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/919876543210" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Pickup / रिक्वेस्ट पिकअप
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:partnerships@saubhagya.com" className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Request Contract / अनुबंध का अनुरोध
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-saubhagya-earth text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-bold text-xl mb-2">Project Saubhagya</h3>
          <p className="font-noto-hindi text-lg mb-4">प्रोजेक्ट सौभाग्य</p>
          <p className="text-white/80 mb-6">
            Shri Krishna Yogeshwar Gaushala, Agar Malwa, Madhya Pradesh
          </p>
          <div className="flex justify-center space-x-6">
            <a href="tel:+919876543210" className="text-white/80 hover:text-white">
              +91 98765 43210
            </a>
            <a href="mailto:services@saubhagya.com" className="text-white/80 hover:text-white">
              services@saubhagya.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;