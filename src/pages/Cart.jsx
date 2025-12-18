import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("CartItems");

    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div>
      <h1 className="mt-20 text-2xl font-semibold text-center">Cart Pages</h1>
      <ul>
        <div>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.images} alt={item.name} width="50" />
              {item.name} - Rp {item.harga.toLocaleString()}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
