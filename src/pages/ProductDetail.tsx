
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

// Reuse same products as Products.tsx (sync this with Products)
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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <section className="py-16 flex flex-col md:flex-row gap-16 max-w-4xl mx-auto">
      <img src={product.image} alt={product.name} className="rounded-2xl w-full md:w-96 object-cover shadow-lg" />
      <div>
        <h2 className="font-playfair text-3xl font-bold text-yashdeep mb-4">{product.name}</h2>
        <p className="text-xl text-yashpurple font-bold mb-4">{product.price}</p>
        <p className="text-base text-gray-600 mb-6">Stay trendy and comfy with this {product.name.toLowerCase()}. Limited stock. Order now!</p>
        <button
          className="bg-yashpurple text-white px-8 py-2 rounded-full font-semibold text-lg shadow-lg hover:bg-yashdeep transition mb-4"
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
