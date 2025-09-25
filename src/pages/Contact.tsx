import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
  
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
            {t("Need Help? We're Here", "मदद चाहिए? हम हैं।")}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t("Our team supports you in Hindi and English. Get instant help for pickups, payments, or partnerships.", "हमारी टीम हिंदी और अंग्रेजी में आपकी सहायता करती है। पिकअप, भुगतान या साझेदारी के लिए तुरंत सहायता प्राप्त करें।")}
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
                <h3 className="font-semibold text-lg mb-2">{t("Call Now", "अभी कॉल करें")}</h3>
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
                <Button 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919876543210">
                    {t("Message Us", "संदेश भेजें")}
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
                <h3 className="font-semibold text-lg mb-2">{t("Email", "ईमेल")}</h3>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:contact@saubhagya.com">
                    {t("Send Message", "संदेश भेजें")}
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("Send Us a Message", "हमें संदेश भेजें")}</h2>
          </div>
          
          <Card className="bg-gradient-warm p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      {t("Name", "नाम")}
                    </Label>
                    <Input 
                      id="name"
                      placeholder={t("Your full name", "आपका पूरा नाम")}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      {t("Phone", "फोन")}
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
                    {t("Village/City", "गांव/शहर")}
                  </Label>
                  <Input 
                    id="village"
                    placeholder={t("Your location", "आपका स्थान")}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    {t("Message", "संदेश")}
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder={t("How can we help you?", "हम आपकी कैसे मदद कर सकते हैं?")}
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
                    {t("Send Message", "संदेश भेजें")}
                  </a>
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
                <p className="text-sm text-card-foreground text-center">
                  <strong>{t("Note:", "नोट:")}</strong> {t("This is a static form. Click \"Send Message\" to open your email client with the details filled in.", "यह एक स्टेटिक फॉर्म है। विवरण भरकर अपना ईमेल क्लाइंट खोलने के लिए \"संदेश भेजें\" पर क्लिक करें।")}
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("Field Support", "फील्ड सहायता")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Voice Message */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Mic className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("Record Voice Message", "आवाज़ संदेश रिकॉर्ड करें")}</h3>
                <p className="text-card-foreground mb-6">
                  {t("Call our helpline and leave a voice message in Hindi or English. Our team will call you back within 2 hours.", "हमारी हेल्पलाइन पर कॉल करें और हिंदी या अंग्रेजी में एक आवाज़ संदेश छोड़ें। हमारी टीम 2 घंटे के भीतर आपको वापस कॉल करेगी।")}
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Headphones className="mr-2 h-5 w-5" />
                    {t("Call to Record", "रिकॉर्ड करने के लिए कॉल करें")}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Local Support */}
            <Card className="bg-card/80 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-center">
                <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("Local Support Team", "स्थानीय सहायता टीम")}</h3>
                <p className="text-card-foreground mb-6">
                  {t("Our field representatives visit gaushalas regularly to ensure smooth operations and address any concerns directly.", "हमारे फील्ड प्रतिनिधि नियमित रूप से गौशालाओं का दौरा करते हैं ताकि सुचारू संचालन सुनिश्चित हो सके और किसी भी चिंता का सीधे समाधान हो सके।")}
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  asChild
                >
                  <a href="https://wa.me/919876543210?text=I%20need%20local%20support">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t("Request Visit", "विज़िट का अनुरोध करें")}
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
                  <h3 className="text-2xl font-bold text-primary">{t("Office Address", "कार्यालय का पता")}</h3>
                </div>
                <div className="space-y-3 text-card-foreground">
                  <p className="font-semibold">Shri Krishna Yogeshwar Gaushala</p>
                  <p>Agar Malwa, Madhya Pradesh</p>
                  <p>India - 465441</p>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-semibold text-lg">{t("Operating Hours", "संचालन का समय")}</h4>
                  </div>
                  <div className="space-y-1 text-card-foreground">
                    <p>{t("Monday - Saturday: 8:00 AM - 6:00 PM", "सोमवार - शनिवार: सुबह 8:00 - शाम 6:00")}</p>
                    <p>{t("Sunday: 9:00 AM - 1:00 PM", "रविवार: सुबह 9:00 - दोपहर 1:00")}</p>
                    <p className="text-sm text-muted-foreground">{t("24/7 WhatsApp support available", "24/7 WhatsApp सहायता उपलब्ध")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-warm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">{t("Contact Information", "संपर्क जानकारी")}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">{t("Phone", "फोन")}</p>
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
                      <p className="font-semibold">{t("Email", "ईमेल")}</p>
                      <a href="mailto:contact@saubhagya.com" className="text-primary hover:underline">
                        contact@saubhagya.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{t("Language Support", "भाषा सहायता")}</h4>
                  <p className="text-sm text-card-foreground">
                    {t("Hindi & English support available. Response within 24 hours guaranteed.", "हिंदी और अंग्रेजी सहायता उपलब्ध है। 24 घंटे के भीतर जवाब की गारंटी।")}
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
          <p className="font-noto-hindi text-lg mb-4">{t("", "प्रोजेक्ट सौभाग्य")}</p>
          <p className="text-white/80 mb-6">
            {t("Empowering farmers through cow-centered biogas solutions", "गाय-केंद्रित बायो गैस समाधानों के माध्यम से किसानों को सशक्त बनाना")}
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