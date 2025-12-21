import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const Products = [
    {
      id: 1,
      name: "Kemeja Premium",
      harga: 15000,
      images: "/images/kemeja.jpg",
      category: "kemeja",
      deksripsi:
        "Kemeja premium dengan bahan yang pastinya memiliki kualitas terbaik dengan harga yang terjangkau",
    },
    {
      id: 2,
      name: "Kemeja Oblang",
      harga: 15000,
      images: "/images/kemeja.jpg",
      category: "kemeja",
      deksripsi:
        "Kemeja oblang memiliki desain yang unik dan kekinian yang cocok dikalangan usia",
    },
    {
      id: 3,
      name: "Kemeja Kekinian",
      harga: 15000,
      images: "/images/kemeja.jpg",
      category: "kemeja",
      deksripsi: "Kemeja kekinian dengan desain modern dan stylish",
    },
    {
      id: 4,
      name: "Polo Shirt",
      harga: 15000,
      images: "/images/kemeja.jpg",
      category: "polo",
      deksripsi:
        "Polo shirt memiliki desain casual yang nyaman dipakai sehari-hari",
    },
    {
      id: 5,
      name: "Polo Classic",
      harga: 15000,
      images: "/images/kemeja.jpg",
      category: "polo",
      deksripsi: "Polo classic dengan bahan katun terbaik yang nyaman dipakai",
    },
    {
      id: 6,
      name: "Celana Katun",
      harga: 15000,
      images: "/images/celana.jpg",
      category: "celana",
      deksripsi: "Celana katun dengan desain simple dan nyaman dipakai",
    },
  ];

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("CartItems")) || [];
    localStorage.setItem("CartItems", JSON.stringify([...cart, product]));
    alert("Produk berhasil ditambahkan ke keranjang");
  };

  useEffect(() => {
    const found = Products.find((p) => p.id === Number(id));
    setProduct(found);

    if (found) {
      const sameCategory = Products.filter(
        (p) => p.category === found.category && p.id !== found.id
      );
      setFilteredProducts(sameCategory);
    }
  }, [id]);

  if (!product)
    return <p className="text-center mt-10">Produk tidak ditemukan</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto mt-20 bg-white shadow-lg rounded-xl p-5 flex gap-5">
        <img
          src={product.images}
          className="w-60 h-56 object-cover rounded-xl"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-lg mt-2 text-gray-700 font-semibold">
            Rp {product.harga.toLocaleString()}
          </p>

          <div className="mt-3 flex gap-2">
            <button className="w-32 bg-cyan-950 hover:bg-teal-700 text-white py-1.5 rounded-lg">
              Buy
            </button>

            <button
              onClick={() => addToCart(product)}
              className="w-20 bg-teal-900 hover:bg-teal-700 text-white py-1.5 rounded-lg"
            >
              🛒
            </button>
          </div>

          <div className="mt-4">
            <span className="font-bold text-lg">Deskripsi :</span>
            <p>{product.deksripsi}</p>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 && (
        <>
          <h2 className="mt-10 text-center font-semibold text-2xl text-blue-950">
            Produk yang Sama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  p-5 justify-items-center">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-3 flex flex-col w-fit"
              >
                <img
                  src={item.images}
                  className="w-56 h-48 object-cover rounded-xl"
                />

                <h3 className="font-semibold mt-2 text-center">{item.name}</h3>
                <p className="text-center">Rp {item.harga.toLocaleString()}</p>

                <button
                  onClick={() => navigate(`/productsdetail/${item.id}`)}
                  className="w-56 mt-2 bg-cyan-900 hover:bg-teal-700 text-white py-1.5 rounded-lg"
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
