import { ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Shop Smarter,
              <span className="text-blue-600"> Live Better.</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Discover thousands of quality products with amazing offers and
              lightning-fast delivery.
            </p>

            <div className="mt-8 flex gap-5">
              <button className="bg-blue-600 text-white hover:scale-105 transition-all duration-300 animate-pulse px-6 py-3 rounded-lg hover:bg-blue-700">
                Shop Now
              </button>

              <button className="hover:scale-105 transition-all duration-300 border border-blue-600 text-blue-600 px-6 py-3 animate-pulse rounded-lg">
                Explore
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-blue-600 w-80 h-80 rounded-full flex items-center justify-center">
              <ShoppingBag size={150} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
