import { useNavigate } from "react-router-dom";

export default function ProductCard({ showTitle = true }) {
  const navigate = useNavigate();

  const Products = [
    {
      id: 1,
      name: "Kemeja Premium",
      harga: 15000,
      images: "../../public/images/kemeja.jpg",
    },
    {
      id: 2,
      name: "Kemeja Oblang",
      harga: 15000,
      images: "../../public/images/kemeja.jpg",
    },
    {
      id: 3,
      name: "Polo Shirt",
      harga: 15000,
      images: "../../public/images/kemeja.jpg",
    },
    {
      id: 4,
      name: "Polo Classic",
      harga: 15000,
      images: "../../public/images/kemeja.jpg",
    },
    {
      id: 5,
      name: "Celana Katun",
      harga: 15000,
      images: "../../public/images/celana.jpg",
    },
  ];

  return (
    <section className="p-5 px-25 mt-8 mb-5">
      {showTitle && (
        <h2 className="p-10 text-center text-3xl font-bold">Products</h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-60 mx-auto mt-5"
          >
            <img
              src={product.images}
              alt={product.name}
              className="w-60 h-56 object-cover object-center"
            />

            <div className="p-3 space-y-1">
              <h3 className="text-lg font-semibold py-3 text-center text-gray-800">
                {product.name}
              </h3>

              <button
                onClick={() => navigate(`/productsdetail/${product.id}`)}
                className="w-full bg-cyan-900 hover:bg-teal-700 text-white py-1.5 rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
