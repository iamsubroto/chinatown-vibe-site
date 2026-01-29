import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const businessHours = [
  { day: "Monday - Friday", hours: "5:30 AM - 10:00 PM" },
  { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            We'd Love to <span className="text-gradient-gold">Hear From You</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about membership, classes, or anything else? Reach out
            and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-charcoal rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold mb-2">Visit Us</h3>
                  <p className="text-white/70 text-sm">
                    48 Mott St, 2nd Floor
                    <br />
                    New York, NY 10013
                  </p>
                </div>
                <div className="bg-charcoal rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold mb-2">Call Us</h3>
                  <a
                    href="tel:+19178305181"
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    (917) 830-5181
                  </a>
                </div>
                <div className="bg-charcoal rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold mb-2">Email Us</h3>
                  <a
                    href="mailto:hello@chinatownflow.com"
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    hello@chinatownflow.com
                  </a>
                </div>
                <div className="bg-charcoal rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold mb-2">Hours</h3>
                  <div className="text-white/70 text-sm space-y-1">
                    {businessHours.map((item, index) => (
                      <p key={index}>
                        <span className="text-white/50">{item.day}:</span>{" "}
                        {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-80 shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0714!2d-73.9986!3d40.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f3f8f3%3A0x1234567890abcdef!2s48%20Mott%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chinatown Flow Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;