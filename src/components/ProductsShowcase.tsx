
import { ShoppingCart } from "lucide-react";

// Placeholder products
const products = [
  {
    id: 1,
    name: "Classic White Tee",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    price: "₹799",
  },
  {
    id: 2,
    name: "Oversized Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    price: "₹1799",
  },
  {
    id: 3,
    name: "Comfy Sweatpants",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    price: "₹1199",
  },
  {
    id: 4,
    name: "Chic Summer Dress",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    price: "₹2099",
  },
];

const ProductsShowcase = () => {
  return (
    <section id="products" className="py-16 bg-yashbeige">
      <div className="container">
        <h2 className="font-playfair text-4xl font-bold mb-8 text-yashdeep text-center animate-fade-in">
          Featured Clothing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg flex flex-col items-center p-5 transition hover:scale-105 animate-fade-in">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full mb-4 object-cover h-48"
              />
              <div className="flex-1 flex flex-col justify-between w-full">
                <h3 className="font-playfair text-xl font-semibold text-yashdeep mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-yashpurple mb-4">{product.price}</p>
                <button
                  className="w-full bg-yashpurple text-white rounded-full py-2 font-semibold flex items-center justify-center gap-2 hover:bg-yashdeep transition story-link"
                  onClick={() => alert('🛒 Added to cart!')}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
