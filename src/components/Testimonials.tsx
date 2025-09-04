import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Mitchell",
      location: "Beverly Hills, CA",
      text: "The team brought my 1967 Mustang back to life beyond my wildest dreams. Every detail was perfect, from the engine bay to the interior stitching. Truly masters of their craft.",
      rating: 5,
      car: "1967 Ford Mustang"
    },
    {
      name: "Catherine Williams",
      location: "Greenwich, CT",
      text: "Five years later, my Jaguar E-Type still turns heads everywhere I go. The restoration quality is exceptional and the attention to authenticity is unmatched.",
      rating: 5,
      car: "1961 Jaguar E-Type"
    },
    {
      name: "James Thompson",
      location: "Scottsdale, AZ",
      text: "From rust bucket to show winner. The transformation of my Camaro was incredible. The team's expertise and passion for classic cars really shows in their work.",
      rating: 5,
      car: "1969 Camaro SS"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient-gold">
            Client Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from fellow enthusiasts who have trusted us with their precious classic automobiles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 hover:shadow-gold">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-automotive-gold text-automotive-gold" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-automotive-gold/20 pt-6">
                  <div className="font-semibold text-foreground font-display">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {testimonial.location}
                  </div>
                  <div className="text-sm font-medium text-automotive-gold">
                    {testimonial.car}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;