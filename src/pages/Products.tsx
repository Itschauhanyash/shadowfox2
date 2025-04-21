
import { Link } from "react-router-dom";

// All clothing items with unsplash clothing photos
const products = [
  {
    id: 1,
    name: "Classic White Tee",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Oversized Denim Jacket",
    price: "₹1799",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Comfy Sweatpants",
    price: "₹1199",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Chic Summer Dress",
    price: "₹2099",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
  },
];

const Products = () => (
  <section className="py-16 max-w-5xl mx-auto">
    <h2 className="font-playfair text-4xl font-bold mb-8 text-yashdeep text-center">
      Shop Clothing
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-xl shadow-lg flex flex-col items-center p-5 hover:scale-105 transition">
          <img src={product.image} alt={product.name} className="rounded-lg w-full mb-4 object-cover h-48" />
          <h3 className="font-playfair text-lg font-semibold text-yashdeep mb-1">{product.name}</h3>
          <p className="text-lg font-bold text-yashpurple">{product.price}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default Products;
