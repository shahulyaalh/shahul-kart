import { Link } from "react-router-dom";
import type { Product } from "../../features/product/product.types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="relative w-full h-52 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
          <button
            onClick={(e) => {
              e.preventDefault();

              if (isWishlisted(product.id)) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
          >
            {isWishlisted(product.id) ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-2xl" />
            )}
          </button>
        </div>
      </div>

      <h2 className="mt-4 font-semibold line-clamp-2">{product.title}</h2>

      <p className="text-blue-600 font-bold mt-2">${product.price}</p>

      <p className="text-yellow-500 mt-2">⭐ {product.rating}</p>

      <span className="inline-block mt-2 bg-gray-100 px-2 py-1 rounded-full text-sm">
        {product.category}
      </span>

      <p className="mt-2 text-green-600">In Stock</p>
      <Link to={`/products/${product.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
