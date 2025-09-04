import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Palette, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Complete Restoration",
      description: "Frame-off restorations bringing your classic car back to its original glory with period-correct parts and meticulous attention to detail."
    },
    {
      icon: Palette,
      title: "Custom Paint & Bodywork",
      description: "Expert paint matching and custom color work. From subtle refinishing to complete color changes, we deliver flawless results."
    },
    {
      icon: Zap,
      title: "Engine Rebuilds",
      description: "Complete engine overhauls and performance upgrades. We rebuild engines to original specifications or enhance them for modern performance."
    },
    {
      icon: Shield,
      title: "Preservation Services",
      description: "Protective services to maintain your investment. From storage solutions to maintenance programs, we keep your classics pristine."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient-gold">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From complete restorations to specialized maintenance, we offer comprehensive services for classic automobile enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-gold transition-all duration-300 bg-card border-automotive-gold/20 hover:border-automotive-gold/40">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-automotive-dark" />
                </div>
                <CardTitle className="text-xl font-display text-foreground group-hover:text-automotive-gold transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;