import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Edit } from "lucide-react";
import { Product } from "@/data/products";

const Admin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    featured: false,
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    const stored = localStorage.getItem("customProducts");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  };

  const saveProducts = (newProducts: Product[]) => {
    localStorage.setItem("customProducts", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const product: Product = {
      id: editingProduct ? editingProduct.id : Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      category: formData.category,
      description: formData.description,
      featured: formData.featured,
    };

    if (editingProduct) {
      const updatedProducts = products.map(p => p.id === editingProduct.id ? product : p);
      saveProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      saveProducts([...products, product]);
    }

    setFormData({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
      featured: false,
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      category: product.category,
      description: product.description || "",
      featured: product.featured || false,
    });
  };

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    saveProducts(updatedProducts);
  };

  const categories = ["Kanchipuram", "Soft Silk", "Banarasi", "Bridal"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Admin Panel</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Add/Edit Product Form */}
          <Card>
            <CardHeader>
              <CardTitle>{editingProduct ? "Edit Product" : "Add New Product"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({...formData, featured: checked as boolean})}
                  />
                  <Label htmlFor="featured">Featured Product</Label>
                </div>

                <Button type="submit" className="w-full">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>

                {editingProduct && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setEditingProduct(null);
                      setFormData({
                        name: "",
                        price: "",
                        image: "",
                        category: "",
                        description: "",
                        featured: false,
                      });
                    }}
                  >
                    Cancel Edit
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Products List */}
          <Card>
            <CardHeader>
              <CardTitle>Current Products ({products.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map(product => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <p className="text-center text-muted-foreground">No custom products added yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
