import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Phone, 
  MessageCircle,
  Scale,
  Truck,
  Zap
} from "lucide-react";
import heroFarmer from "@/assets/hero-farmer.jpg";

const FarmerLanding = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFarmer})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            From Dung to Dhan
          </h1>
          <p className="font-noto-hindi text-2xl md:text-4xl text-white/90 mb-6">
            गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            IoT-verified weighments, same-day payouts, local CBG production
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:join@saubhagya.com">
                <Users className="mr-2 h-5 w-5" />
                Join as Farmer / फार्मर बनें
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/20 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/919876543210">
                <Truck className="mr-2 h-5 w-5" />
                Request Pickup / रिक्वेस्ट पिकअप
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">+30%</h3>
              <p className="text-card-foreground">Farmer Income Increase</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">किसान आय वृद्धि</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">&gt;90%</h3>
              <p className="text-card-foreground">CBG Yield Efficiency</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">CBG उत्पादन दक्षता</p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-warm">
              <Shield className="h-12 w-12 text-saubhagya-green mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
              <p className="text-card-foreground">Methane Reduction</p>
              <p className="font-noto-hindi text-sm text-muted-foreground">मीथेन कमी</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">यह कैसे काम करता है</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Smart Collection</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">स्मार्ट संग्रह</p>
                <p className="text-sm text-card-foreground">IoT-verified weighing and instant recording</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe Transport</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">सुरक्षित परिवहन</p>
                <p className="text-sm text-card-foreground">GPS-tracked pickup from your gaushala</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">CBG Production</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">CBG उत्पादन</p>
                <p className="text-sm text-card-foreground">Clean biogas processing locally</p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-green transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fair Payment</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-2">न्यायपूर्ण भुगतान</p>
                <p className="text-sm text-card-foreground">Same-day payout to your account</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farmer Benefits */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Farmer Benefits</h2>
            <p className="font-noto-hindi text-xl text-muted-foreground">किसान लाभ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Payouts</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">तत्काल भुगतान</p>
                <p className="text-card-foreground">Get paid the same day your contribution is processed. No waiting, no delays.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Zero Disputes</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">शून्य विवाद</p>
                <p className="text-card-foreground">IoT-verified weighing ensures transparent and accurate measurements every time.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Jobs</h3>
                <p className="font-noto-hindi text-sm text-muted-foreground mb-4">स्थानीय नौकरियां</p>
                <p className="text-card-foreground">Creating employment opportunities in your village through local CBG production.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilot Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-warm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Successful Pilot in Agar Malwa
              </h2>
              <p className="font-noto-hindi text-xl text-muted-foreground mb-6">
                अगर मालवा में सफल पायलट
              </p>
              <p className="text-lg text-card-foreground max-w-3xl mx-auto mb-8">
                Our pilot project at Shri Krishna Yogeshwar Gaushala has successfully demonstrated 
                30% income increase for farmers while producing high-quality CBG for local businesses.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-green"
                asChild
              >
                <a href="mailto:info@saubhagya.com">
                  Learn About Our Pilot
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
          <p className="font-noto-hindi text-xl mb-8">मदद चाहिए?</p>
          <p className="text-lg mb-8 opacity-90">
            Our team is here to support you in Hindi and English. Get instant help via phone or WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+919876543210" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now / अभी कॉल करें
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/919876543210" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp / व्हाट्सऐप
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
            <a href="mailto:contact@saubhagya.com" className="text-white/80 hover:text-white">
              contact@saubhagya.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmerLanding;