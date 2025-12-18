import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("CartItems");

    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const removeItems = (removeItemsId) => {
    const updatedItems = cartItems.filter((item) => item.id !== removeItemsId);
    setCartItems(updatedItems);
    localStorage.setItem("CartItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">🛒 Cart Pages</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Keranjang masih kosong</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Rp {item.harga.toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeItems(item.id)}
                className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
