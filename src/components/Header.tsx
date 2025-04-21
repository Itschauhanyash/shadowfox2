
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 select-none">
          <ShoppingBag className="text-yashpurple w-8 h-8" />
          <span className="font-playfair text-2xl font-extrabold text-yashpurple tracking-wide drop-shadow-sm">
            Yash shopping
          </span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/products" className="text-base font-medium text-gray-700 hover:text-yashpurple transition story-link">
            Shop
          </Link>
          <Link to="/about" className="text-base font-medium text-gray-700 hover:text-yashpurple transition story-link">
            About
          </Link>
          <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-yashpurple transition story-link">
            Contact
          </Link>
          <Link to="/cart" className="ml-5 p-2 rounded-full bg-yashaccent/90 hover:bg-yashpurple group relative transition">
            <span className="sr-only">Cart</span>
            <ShoppingBag className="w-6 h-6 text-yashdeep group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 inline-block text-xs font-semibold px-2 py-0.5 bg-yashpurple text-white rounded-full shadow-sm">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
