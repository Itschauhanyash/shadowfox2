
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl mb-6 font-semibold">Your cart is empty</h2>
        <Link to="/products" className="text-yashpurple hover:underline font-medium">
          Shop Clothing
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="font-playfair text-3xl mb-8 font-bold text-yashdeep text-center">Your Cart</h1>
      <ul className="divide-y divide-gray-200 mb-8">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shadow" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-yashpurple">{item.price} x {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mb-8 px-2">
        <span className="font-medium text-xl">Total: </span>
        <span className="font-bold text-yashdeep text-2xl">₹{total}</span>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <button
          onClick={clearCart}
          className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          Clear Cart
        </button>
        <Link to="/checkout" className="px-8 py-2 bg-yashpurple text-white rounded-full font-semibold hover:bg-yashdeep transition">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
