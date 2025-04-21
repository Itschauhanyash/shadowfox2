
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  useEffect(() => {
    // On mount, if cart is empty, redirect? For now just stay
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-8">No items in cart!</h2>
        <a href="/products" className="text-yashpurple hover:underline font-medium">
          Shop Clothing
        </a>
      </div>
    );
  }

  // On submit, just clear cart and show a thank you at this stage.
  return (
    <div className="max-w-lg mx-auto py-24">
      <h1 className="font-playfair text-3xl font-bold mb-8 text-center">Checkout</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          clearCart();
          window.alert("Thank you for your order! 👕");
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Shipping Address</label>
          <input className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Card Details</label>
          <input type="text" className="w-full px-3 py-2 border rounded" required placeholder="XXXX XXXX XXXX XXXX" maxLength={19} />
        </div>
        <button type="submit" className="w-full bg-yashpurple text-white py-3 rounded-full font-bold text-lg hover:bg-yashdeep transition">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
