import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import aboutImage from "@/assets/about-training.jpg";

const features = [
  "Flow-based training methodology",
  "Mind-body connection focus",
  "Community-driven atmosphere",
  "Personalized fitness journeys",
];

const About = () => {
  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Training at Chinatown Flow"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-2xl p-6 shadow-gold">
              <div className="text-white text-center">
                <div className="font-display text-4xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              More Than Just a{" "}
              <span className="text-gradient-gold">Gym</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Chinatown Flow was born from a simple belief: fitness should be
              accessible, enjoyable, and transformative. Located in the vibrant
              heart of Chinatown, we've created a space where ancient wisdom
              meets modern fitness innovation.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Our unique approach combines flow-based training with
              high-intensity workouts, helping you achieve physical excellence
              while nurturing mental clarity. Join our community of passionate
              individuals committed to becoming their best selves.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button variant="gold" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
