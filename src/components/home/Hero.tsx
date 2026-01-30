import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Chinatown Flow Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
              Premium Fitness in the Heart of Chinatown
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Find Your{" "}
            <span className="text-gradient-gold">Flow </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-xl animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Experience world-class training in our state-of-the-art facility.
            From flow yoga to high-intensity workouts, discover fitness that
            moves with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Link to="/memberships">
              <Button variant="gold" size="lg">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="gold-outline" size="lg">
                <Play className="w-5 h-5" />
                View Classes
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            {[{
            number: "50+",
            label: "Classes Weekly"
          }, {
            number: "15+",
            label: "Expert Trainers"
          }, {
            number: "1000+",
            label: "Happy Members"
          }].map((stat, index) => <div key={index} className="text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gold">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;