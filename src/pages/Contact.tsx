import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our sarees? Want to place an order? 
              Reach out to us via WhatsApp for the quickest response!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* WhatsApp - Primary CTA */}
            <div className="bg-[#25D366]/10 border-2 border-[#25D366] rounded-2xl p-8 mb-8 text-center">
              <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                WhatsApp Us
              </h2>
              <p className="text-muted-foreground mb-6">
                The fastest way to reach us. Click below to start a conversation!
              </p>
              <a
                href="https://wa.me/918143858263?text=Hi! I'm interested in your sarees."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start WhatsApp Chat
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                +91 81438 58263
              </p>
            </div>

            {/* Other Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:+918143858263"
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">+91 81438 58263</p>
              </a>

              <a
                href="mailto:navadurgameda84@gmail.com"
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm">navadurgameda84@gmail.com</p>
              </a>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Konanki Village, Andhra Pradesh</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 bg-muted rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-display text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                WhatsApp messages are responded within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
