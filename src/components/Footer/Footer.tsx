const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">ShopKart</h2>
            <p className="text-gray-400">
              Your one-stop destination for all shopping needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">support@shopkart.com</p>
            <p className="text-gray-400">+91 98765 43210</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 ShopKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
