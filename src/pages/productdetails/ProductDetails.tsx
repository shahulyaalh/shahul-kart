import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../features/product/product.service";
import type { Product } from "../../features/product/product.types";
import { useCart } from "../../context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-3xl py-20">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="text-center text-3xl py-20">Product Not Found</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <h2 className="text-3xl font-bold text-blue-600 mt-6">
            ${product.price}
          </h2>
          <p className="mt-2">⭐ {product.rating}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
