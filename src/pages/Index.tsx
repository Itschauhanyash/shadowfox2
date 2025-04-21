
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-yashbeige to-yashaccent min-h-screen pb-12">
      <Header />
      <HeroSection />
      <div className="max-w-2xl mx-auto flex flex-wrap gap-6 justify-center py-12">
        <Link to="/products" className="bg-yashpurple text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-yashdeep transition">Shop Now</Link>
        <Link to="/about" className="bg-white text-yashpurple border border-yashpurple px-6 py-3 rounded-full font-semibold shadow hover:bg-yashpurple/10 transition">About</Link>
        <Link to="/cart" className="bg-white text-yashdeep border border-yashpurple/50 px-6 py-3 rounded-full font-semibold shadow hover:bg-yashpurple/10 transition">Cart</Link>
        <Link to="/contact" className="bg-white text-yashpurple border border-yashpurple/70 px-6 py-3 rounded-full font-semibold shadow hover:bg-yashpurple/10 transition">Contact</Link>
      </div>
      <footer className="mt-24 py-8 border-t text-center text-yashdeep/70 text-base">
        © {new Date().getFullYear()} Yash shopping – All Rights Reserved
      </footer>
    </div>
  );
};

export default Index;
