import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Member since 2022",
    content:
      "Chinatown Flow has completely transformed my approach to fitness. The trainers are incredible and the community is so supportive. I've never felt more motivated!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Member since 2021",
    content:
      "The variety of classes here is unmatched. From intense HIIT sessions to calming yoga flows, there's something for every mood and goal. Best gym I've ever been to.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Member since 2023",
    content:
      "I was intimidated to join a gym, but Chinatown Flow made me feel welcome from day one. The personalized attention and modern facilities are worth every penny.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4">
            What Our Members{" "}
            <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-card hover-lift relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-gold/20" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white font-display font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
