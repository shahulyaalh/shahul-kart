import {
  Laptop,
  Shirt,
  Sofa,
  ShoppingBasket,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: 1, name: "Electronics", icon: Laptop },

  { id: 2, name: "Fashion", icon: Shirt },

  { id: 3, name: "Furniture", icon: Sofa },

  { id: 4, name: "Beauty", icon: Sparkles },

  { id: 5, name: "Grocery", icon: ShoppingBasket },

  { id: 6, name: "Sports", icon: Dumbbell },
];

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Shop By Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer p-6 flex flex-col items-center"
            >
              <Icon size={45} className="text-blue-600 mb-4" />

              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
