import { useEffect, useState } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map(({ id, name, price, stock, category }) => (
        <div
          key={id}
          className="bg-blue-100 shadow-md p-4 rounded-xl border hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-indigo-700">{name}</h3>
          <p className="text-gray-700">Harga: Rp {price}</p>
          <p className="text-gray-700">Stok: {stock}</p>
          <p className="text-gray-500 text-sm">Kategori: {category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductAPI;
