import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    toast.success("🎉 Order Placed Successfully!");

    clearCart();

    navigate("/");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Shipping Form */}

        <form onSubmit={handleOrder} className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              className="border p-3 rounded-lg"
              value={form.firstName}
              onChange={handleChange}
            />

            <input
              name="lastName"
              placeholder="Last Name"
              className="border p-3 rounded-lg"
              value={form.lastName}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              className="border p-3 rounded-lg md:col-span-2"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="border p-3 rounded-lg md:col-span-2"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              name="address"
              placeholder="Address"
              className="border p-3 rounded-lg md:col-span-2"
              value={form.address}
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="City"
              className="border p-3 rounded-lg"
              value={form.city}
              onChange={handleChange}
            />

            <input
              name="pincode"
              placeholder="Pincode"
              className="border p-3 rounded-lg"
              value={form.pincode}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b pb-4"
                  >
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="text-sm text-gray-500">
                        Quantity : {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-6 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
