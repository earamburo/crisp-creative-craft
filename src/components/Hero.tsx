import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-classic-car.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Classic car restoration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 automotive-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
          Restoring Classic{' '}
          {/* <span className="text-gradient-gold">
            Automotive
          </span> */}
          <br />
          Repairing Daily Drivers
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          In the heart of Athens, Georgia, we breathe life into classic car restoration. 
          We don't just fix cars, we resurrect legends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:opacity-90 text-black font-semibold shadow-gold px-8 py-3"
          >
            Get an estimate
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
          >
            View the Gallery
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;