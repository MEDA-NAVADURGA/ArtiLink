import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import newHeroBanner from "@/assets/new_hero_banner.png";
import { getAllProducts } from "@/data/products";

import { Sparkles, Heart, Truck } from "lucide-react";

const Index = () => {
  const products = getAllProducts();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${newHeroBanner})` }}
        >
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
              Authentic Handmade Sarees
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 leading-tight">
              Timeless Elegance, <br />
              <span className="text-gold">Affordable Luxury</span>
            </h1>
            <p className="text-ivory/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover exquisite handwoven pattu sarees crafted with love and tradition. 
              Every piece tells a story of heritage and artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="gold" size="xl">
                  Explore Collection
                </Button>
              </Link>
              <a
                href="https://wa.me/918143858263?text=Hi! I'm interested in your sarees."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="xl">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">100% Handmade</h3>
              <p className="text-muted-foreground">
                Each saree is crafted by skilled artisans with generations of expertise.
              </p>
            </div>
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-muted-foreground">
                Premium quality at prices that won't break the bank. Value guaranteed.
              </p>
            </div>
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-muted-foreground">
                We deliver across India with careful packaging and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              Our Collection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Featured Sarees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of exquisite pattu sarees, 
              perfect for weddings, festivals, and special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="default" size="lg">
                View All Sarees
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory mb-6">
            Ready to Find Your Perfect Saree?
          </h2>
          <p className="text-ivory/80 text-lg mb-8 max-w-xl mx-auto">
            Connect with us on WhatsApp for personalized recommendations, 
            pricing inquiries, and easy ordering.
          </p>
          <a
            href="https://wa.me/918143858263?text=Hi! I'm interested in your sarees. Please share your collection."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start a Conversation
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
