import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../../features/product/product.service";
import type { Product } from "../../features/product/product.types";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (sort === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, search, category, sort]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">All Products</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-3 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded-lg"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Default</option>
          <option value="low-high">Price Low to High</option>
          <option value="high-low">Price High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <h2 className="text-3xl font-bold">No Products Found 😔</h2>

            <p className="text-gray-500 mt-3">
              Try another search or category.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
