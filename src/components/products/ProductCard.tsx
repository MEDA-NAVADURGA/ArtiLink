import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-200">
      {/* Use React Router Link */}
      <Link to={`/productDetail/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
