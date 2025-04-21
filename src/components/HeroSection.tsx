
const HeroSection = () => {
  return (
    <section className="w-full min-h-[430px] flex items-center justify-center relative overflow-hidden" style={{
      background: "linear-gradient(100deg, #e5deff 0%, #9b87f5 100%)"
    }}>
      <div className="container py-16 md:py-24 flex flex-col items-center text-center relative z-10">
        <h1 className="font-playfair text-5xl md:text-6xl font-extrabold text-yashdeep drop-shadow-lg mb-4 animate-fade-in">
          Step into Style.<br />Shop the Latest.
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-yashdeep/80 mb-8 animate-fade-in">
          Discover trendy clothes, curated for you. Express yourself with Yash shopping – your new favorite clothing destination.
        </p>
        <a
          href="#products"
          className="inline-block bg-yashpurple text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yashdeep transition-all duration-200 animate-fade-in hover-scale"
        >
          Shop Now
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
        alt="Fashion model"
        className="hidden md:block absolute right-0 bottom-0 max-h-[420px] rounded-bl-3xl drop-shadow-2xl animate-fade-in"
        style={{ width: "390px", objectFit: "cover" }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-yashpurple/30 rounded-bl-full blur-[72px] pointer-events-none -z-1"></div>
    </section>
  );
};

export default HeroSection;
