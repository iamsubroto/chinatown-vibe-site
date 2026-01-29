import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Target, Sparkles } from "lucide-react";
import aboutHeroImage from "@/assets/about-hero.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe fitness is better together. Our community supports, motivates, and celebrates each other.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every class, every session is designed with purpose. We help you achieve real, lasting results.",
  },
  {
    icon: Users,
    title: "Inclusive Environment",
    description:
      "All bodies, all levels, all welcome. We create space for everyone to thrive.",
  },
  {
    icon: Sparkles,
    title: "Mind-Body Balance",
    description:
      "True wellness integrates physical strength with mental clarity and emotional well-being.",
  },
];

const trainers = [
  {
    name: "Sarah Kim",
    role: "Yoga & Flow Specialist",
    image: trainer1,
    bio: "15 years of practice, certified in Vinyasa, Yin, and Restorative yoga.",
  },
  {
    name: "Marcus Chen",
    role: "HIIT & Conditioning Coach",
    image: trainer2,
    bio: "Former athlete, specializing in high-intensity training and performance.",
  },
  {
    name: "Lisa Wang",
    role: "Boxing & Strength Trainer",
    image: trainer3,
    bio: "Competitive boxer and certified strength coach with 10+ years experience.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Chinatown Flow Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative container-custom py-32 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Where Movement Meets <span className="text-gradient-gold">Community</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Born in the heart of Chinatown, we're more than a gym—we're a
            movement dedicated to transforming lives through fitness.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-8">
              Our Journey
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Chinatown Flow was founded in 2019 with a simple mission: to
                create a fitness space that honors both ancient wellness traditions
                and modern training science. Located on the second floor of a
                historic Mott Street building, we've transformed a former garment
                factory into a sanctuary for movement.
              </p>
              <p>
                Our name reflects our philosophy—"flow" represents the fluid,
                connected approach we take to fitness. Whether you're flowing
                through a yoga sequence, finding rhythm in a boxing combination,
                or pushing through a HIIT circuit, we believe in movement that
                feels natural and purposeful.
              </p>
              <p>
                Today, we're proud to serve over 1,000 members from all walks of
                life. From busy professionals seeking stress relief to athletes
                chasing peak performance, our diverse community is united by a
                shared commitment to growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-4">
              Expert <span className="text-gradient-gold">Trainers</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover-lift"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl font-bold text-white">
                      {trainer.name}
                    </h3>
                    <p className="text-gold text-sm">{trainer.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-20">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Experience Chinatown Flow for yourself. Book a free class and see why
            our members love being part of our family.
          </p>
          <Link to="/memberships">
            <Button variant="gold" size="lg">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;