import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Target, 
  Eye, 
  Shield, 
  Zap,
  Users,
  ArrowRight,
  Handshake
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Saubhagya</h1>
          <p className="font-noto-hindi text-2xl text-muted-foreground mb-6">सौभाग्य के बारे में</p>
          <p className="text-lg text-card-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming the traditional gaushala ecosystem into a modern, technology-driven 
            circular economy that benefits farmers, communities, and the environment.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
              <p className="font-noto-hindi text-xl text-muted-foreground mb-6">हमारी कहानी</p>
              <div className="space-y-4 text-card-foreground">
                <p>
                  Farmers across India face the challenge of inconsistent pricing and payment delays 
                  for their cow dung contributions to local gaushalas.
                </p>
                <p>
                  We recognized that happy, healthy cows are not just sacred animals, but also the 
                  foundation for sustainable energy production and rural economic development.
                </p>
                <p>
                  Our solution combines traditional gaushala wisdom with modern IoT technology to 
                  create a transparent, fair, and profitable ecosystem for all stakeholders.
                </p>
              </div>
            </div>
            <Card className="bg-gradient-sunrise p-8">
              <CardContent className="p-0 text-center">
                <Heart className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Cow-Centered Approach
                </h3>
                <p className="text-white/90">
                  Every aspect of our system revolves around the wellbeing of cows and 
                  the prosperity of farmers who care for them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">हमारी दृष्टि</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    Pan-India network of profitable gaushalas
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    Every farmer earning fair income from cow care
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    Sustainable energy powering rural communities
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-4">हमारा मिशन</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    Transparent, IoT-verified cow dung collection
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    Same-day payments to farmers
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    PESO-compliant CBG for corporates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Values</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">मुख्य मूल्य</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trust</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">विश्वास</p>
                <p className="text-sm text-card-foreground">Building lasting relationships through transparency</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">पारदर्शिता</p>
                <p className="text-sm text-card-foreground">Open, verifiable processes at every step</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Technology</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">तकनीक</p>
                <p className="text-sm text-card-foreground">IoT and automation for efficiency</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">स्थिरता</p>
                <p className="text-sm text-card-foreground">Environmental and economic sustainability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Pipeline */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">हम कैसे काम करते हैं</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Farmer</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">किसान</p>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Cow Dung</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">गोबर</p>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Digester</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">डाइजेस्टर</p>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Purifier</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">शोधक</p>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Buyer</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">खरीदार</p>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            
            <Card className="text-center p-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Handshake className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Payout</h4>
                <p className="font-noto-hindi text-xs text-muted-foreground">भुगतान</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilot & Team */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Pilot Success */}
            <Card className="p-8 bg-gradient-earth">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Pilot Success Story</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-6">पायलट सफलता की कहानी</p>
                <div className="space-y-4 text-card-foreground">
                  <p>
                    <strong>Location:</strong> Shri Krishna Yogeshwar Gaushala, Agar Malwa
                  </p>
                  <p>
                    <strong>Results:</strong> 30% increase in farmer income within 6 months
                  </p>
                  <p>
                    <strong>Impact:</strong> 50+ farmers now receive transparent, same-day payments
                  </p>
                  <p>
                    <strong>Production:</strong> Consistent CBG supply to local businesses
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Team</h3>
                <p className="font-noto-hindi text-lg text-muted-foreground mb-6">हमारी टीम</p>
                <div className="space-y-4 text-card-foreground">
                  <p>
                    Our diverse team combines expertise in agriculture, technology, 
                    renewable energy, and rural development.
                  </p>
                  <p>
                    We work closely with gaushala operators, farmers, and local 
                    communities to ensure our solutions are practical and beneficial.
                  </p>
                  <p>
                    Every team member is committed to the vision of prosperous 
                    farmers and sustainable energy for India.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="font-noto-hindi text-xl mb-8">हमारे मिशन में शामिल हों</p>
          <p className="text-lg mb-8 opacity-90">
            Ready to be part of the cow-centered biogas revolution? 
            Get our detailed pilot brief and explore partnership opportunities.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
            asChild
          >
            <a href="mailto:info@saubhagya.com?subject=Pilot Brief Request">
              Get Pilot Brief
            </a>
          </Button>
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
            <a href="mailto:info@saubhagya.com" className="text-white/80 hover:text-white">
              info@saubhagya.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;