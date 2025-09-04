import { Card, CardContent } from "@/components/ui/card";
import heroClassicCar from "@/assets/hero-classic-car.jpg";
import jaguarEType from "@/assets/jaguar-e-type.jpg";
import camaroSS from "@/assets/camaro-ss.jpg";
import mustangFastback from "@/assets/mustang-fastback.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: heroClassicCar,
      title: "1961 Jaguar E-Type",
      description: "Complete frame-off restoration"
    },
    {
      id: 2,
      image: jaguarEType,
      title: "1967 Jaguar E-Type",
      description: "Engine rebuild and paint restoration"
    },
    {
      id: 3,
      image: camaroSS,
      title: "1969 Camaro SS",
      description: "Numbers matching restoration"
    },
    {
      id: 4,
      image: mustangFastback,
      title: "1967 Mustang Fastback",
      description: "Concours level restoration"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gradient-gold">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformation of classic automobiles through our meticulous restoration process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-display text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">
                      {item.description}
                    </p>
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

export default Gallery;