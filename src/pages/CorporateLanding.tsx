import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Factory, 
  Award,
  Download,
  Building2,
  Zap,
  CheckCircle
} from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";

const CorporateLanding = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCorporate})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Saubhagya — Scalable CBG & Circular Economy
          </h1>
          <p className="font-noto-hindi text-2xl md:text-3xl text-white/90 mb-6">
            सौभाग्य — स्केलेबल CBG और सर्कुलर अर्थव्यवस्था
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Traceable supply chain, PESO-compliant batches, proven pilot results with 30% farmer income increase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:partnerships@saubhagya.com">
                <Building2 className="mr-2 h-5 w-5" />
                Partner With Us
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/20 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:info@saubhagya.com?subject=Pilot Brief Request">
                <Download className="mr-2 h-5 w-5" />
                Download Pilot Brief
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Proven Results</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">सिद्ध परिणाम</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">+30%</h3>
              <p className="text-card-foreground font-semibold">Farmer Income Increase</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">किसान आय वृद्धि</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">&gt;90%</h3>
              <p className="text-card-foreground font-semibold">CBG Yield Efficiency</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">CBG उत्पादन दक्षता</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <Shield className="h-12 w-12 text-saubhagya-green mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
              <p className="text-card-foreground font-semibold">Methane Emission Reduction</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">मीथेन उत्सर्जन कमी</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Scale */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Problem */}
            <Card className="p-8 hover:shadow-green transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <Factory className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Problem</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">समस्या</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Farmers struggle with inconsistent dung pricing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Corporates face unreliable CBG supply chains
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Methane emissions from untreated dung
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="p-8 hover:shadow-green transition-all duration-300 bg-gradient-warm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Solution</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">समाधान</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    IoT-verified transparent weighing system
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    PESO-compliant CBG production & delivery
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    Complete circular economy implementation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Scale Model */}
            <Card className="p-8 hover:shadow-green transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Scale Model</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">स्केल मॉडल</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cluster-based gaushala networks
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regional CBG processing hubs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Pan-India supply chain integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted & Supported By</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">भरोसेमंद और समर्थित</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SATAT Initiative</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">SATAT पहल</p>
                <p className="text-card-foreground">
                  Aligned with Government of India's Sustainable Alternative Towards Affordable Transportation initiative for CBG promotion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Factory className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">GOBARdhan Scheme</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">गोबरधन योजना</p>
                <p className="text-card-foreground">
                  Supported under the Galvanizing Organic Bio-Agro Resources Dhan scheme for waste-to-wealth creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-warm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Saubhagya?
              </h2>
              <p className="font-noto-hindi text-xl text-muted-foreground mb-8">
                सौभाग्य क्यों चुनें?
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">PESO Compliant</h4>
                  <p className="text-sm text-card-foreground">Certified quality standards</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Traceable Supply</h4>
                  <p className="text-sm text-card-foreground">End-to-end transparency</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Proven Results</h4>
                  <p className="text-sm text-card-foreground">Pilot success in Agar Malwa</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Scalable Model</h4>
                  <p className="text-sm text-card-foreground">Pan-India expansion ready</p>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-green"
                asChild
              >
                <a href="mailto:partnerships@saubhagya.com">
                  <Building2 className="mr-2 h-5 w-5" />
                  Explore Partnership Opportunities
                </a>
              </Button>
            </div>
          </Card>
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
            <a href="mailto:partnerships@saubhagya.com" className="text-white/80 hover:text-white">
              partnerships@saubhagya.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateLanding;