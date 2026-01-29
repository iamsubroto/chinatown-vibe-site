import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a537' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative container-custom text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Ready to Start Your{" "}
          <span className="text-gradient-gold">Transformation?</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join Chinatown Flow today and discover the power of flow-based
          fitness. Your first class is on us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/memberships">
            <Button variant="gold" size="xl">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/schedule">
            <Button variant="gold-outline" size="xl">
              View Class Schedule
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/50">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">★</span>
            <span className="text-sm">4.9 Rating on Google</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span className="text-sm">No Commitment Required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">♥</span>
            <span className="text-sm">Loved by 1000+ Members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;