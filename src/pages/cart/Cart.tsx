import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">🛒 Your Cart is Empty</h1>

        <p className="text-gray-500 mt-4">Add some products to your cart.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow rounded-xl p-5"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <div>
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold">
          Total : ${totalAmount.toFixed(2)}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
