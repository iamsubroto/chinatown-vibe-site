import { Dumbbell, Users, Calendar, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description:
      "State-of-the-art machines and free weights for every fitness level.",
  },
  {
    icon: Calendar,
    title: "50+ Weekly Classes",
    description:
      "From yoga to HIIT, find the perfect class that fits your schedule.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Certified professionals dedicated to helping you reach your goals.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Conveniently located in the heart of Chinatown, easily accessible.",
  },
];

const Highlights = () => {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Succeed</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
