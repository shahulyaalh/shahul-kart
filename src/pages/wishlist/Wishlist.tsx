import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <section className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">❤️ Wishlist is Empty</h1>

        <p className="text-gray-500 mt-4">Save your favourite products here.</p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">❤️ My Wishlist</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-5">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-52 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>

            <p className="text-blue-600 font-bold mt-2">${item.price}</p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
