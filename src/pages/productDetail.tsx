import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getAllProducts, getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getAllProducts().find((p) => p.id === id);


  if (!product)
    return (
      <Layout>
        <p className="text-center py-20">Product not found</p>
      </Layout>
    );

  const mainImage = product.image;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-md rounded shadow-md"
          />

        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">Price: ₹{product.price.toLocaleString("en-IN")}</p>
          <p className="text-muted-foreground">{product.description}</p>

          <div className="mt-6 flex gap-4">
            <Link to="/products">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
              </Button>
            </Link>

            <a
              href={getWhatsAppLink(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="gold">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
