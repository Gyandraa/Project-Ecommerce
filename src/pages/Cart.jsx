import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("CartItems");

    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  //menghapus item dari cart berdasarkan id item tersebut
  const removeItems = (removeItemsId) => {
    const updatedItems = cartItems.filter((item) => item.id !== removeItemsId);
    setCartItems(updatedItems);
    localStorage.setItem("CartItems", JSON.stringify(updatedItems));
  };

  const totalharga = cartItems.reduce((total, item) => total + item.harga, 0);

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">🛒 Cart Pages</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Keranjang masih kosong</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
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

              <div className="flex gap-3 mt-3">
                {/* <button
                  onClick={() => addQty(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  +
                </button>

                <button
                  onClick={() => deleteQty(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  -
                </button> */}

                <button
                  onClick={() => removeItems(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>
        <div className="flex border-t-2 mt-8 pt-4 justify-between items-center">
          <h2 className="text-2xl font-semibold mt-8">
            Total Harga: Rp {totalharga.toLocaleString()}
          </h2>
          <button
            onClick={() => {}}
            className="mt-8 ml-4 bg-green-500 hover:bg-green-900 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
