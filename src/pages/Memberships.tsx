import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: 79,
    yearlyPrice: 69,
    description: "Perfect for getting started on your fitness journey",
    features: [
      "Access to gym floor",
      "Locker room access",
      "2 group classes per week",
      "Basic fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 129,
    yearlyPrice: 109,
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Unlimited gym access",
      "All group classes included",
      "1 personal training session/month",
      "Nutrition consultation",
      "Towel service",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    monthlyPrice: 199,
    yearlyPrice: 169,
    description: "The ultimate fitness experience with premium perks",
    features: [
      "Everything in Pro",
      "4 personal training sessions/month",
      "Monthly body composition analysis",
      "Recovery room access",
      "Exclusive member events",
      "Dedicated locker",
      "Unlimited guest passes",
      "Meal prep guidance",
    ],
    popular: false,
  },
];

const Memberships = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
            Membership Plans
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect <span className="text-gradient-gold">Plan</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Choose a membership that fits your lifestyle and goals. All plans
            include access to our state-of-the-art facility.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-full p-2">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-gold text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-gold text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Yearly
              <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-warm-white -mt-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-charcoal text-white shadow-elevated scale-105"
                    : "bg-white shadow-card hover-lift"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-gold text-white text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`font-display text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-display font-bold ${
                        plan.popular ? "text-gold" : "text-charcoal"
                      }`}
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className={
                        plan.popular ? "text-white/50" : "text-muted-foreground"
                      }
                    >
                      /month
                    </span>
                  </div>
                  {isYearly && (
                    <p
                      className={`text-sm mt-2 ${
                        plan.popular ? "text-gold/80" : "text-gold"
                      }`}
                    >
                      Billed annually (${isYearly ? plan.yearlyPrice * 12 : plan.monthlyPrice * 12})
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? "bg-gold/20" : "bg-gold/10"
                        }`}
                      >
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/80" : "text-charcoal/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "gold" : "gold-outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Link */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Have questions?{" "}
              <Link to="/contact" className="text-gold hover:underline font-medium">
                Contact us
              </Link>{" "}
              or visit our FAQ section.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Schedule a free tour and consultation. Our team will help you find the
            perfect membership for your goals.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Book a Free Tour
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Memberships;