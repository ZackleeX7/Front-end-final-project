import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./features/products/ProductList";
import EmptyState from "./features/products/EmptyState";
import ProductForm from "./features/products/productforms/ProductForm";
import SearchBar from "./features/products/SearchBar";
import FilterPanel from "./features/products/FilterPanel";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    stockStatus: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setError(null);
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Gagal mengambil data produk. Pastikan json-server berjalan di port 3000. Error: " + error.message);
    }
  };

  const addProduct = async (product) => {
    try {
      setError(null);
      await axios.post("http://localhost:3000/products", product);
      fetchProducts(); // Refresh list from server
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Gagal menambah produk: " + error.message);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      setError(null);
      await axios.put(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct);
      fetchProducts(); // Refresh list from server
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Gagal mengupdate produk: " + error.message);
    }
  };

  const deleteProduct = (id) => {
    setDeleteConfirmation(id);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation) return;
    try {
      setError(null);
      await axios.delete(`http://localhost:3000/products/${deleteConfirmation}`);
      fetchProducts(); // Refresh list from server
      setDeleteConfirmation(null);
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Gagal menghapus produk: " + error.message);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleFormSubmit = (product) => {
    if (editingProduct) {
      updateProduct({ ...product, id: editingProduct.id });
    } else {
      addProduct(product);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category ? product.category.toLowerCase() === filters.category.toLowerCase() : true;
    const matchesMinPrice = filters.minPrice ? product.price >= Number(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? product.price <= Number(filters.maxPrice) : true;
    const matchesStock = filters.stockStatus
      ? filters.stockStatus === "tersedia"
        ? product.stock > 0
        : product.stock === 0
      : true;

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice && matchesStock;
  });

  return (
    <section className="p-6">
      <div className="flex justify-center mb-6">
        <ProductForm
          onSubmit={handleFormSubmit}
          initialData={editingProduct}
          onCancel={() => setEditingProduct(null)}
        />
      </div>
      <h2 className="text-xl flex justify-center font-semibold mb-4">Product Inventory</h2>
      <div className="mt-4">
        <SearchBar searchValue={searchQuery} onSearchChange={setSearchQuery} />
        <FilterPanel filters={filters} setFilters={setFilters} />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {products.length === 0 ? (
          <EmptyState />
        ) : (
          <ProductList
            products={filteredProducts}
            onDelete={deleteProduct}
            onEdit={handleEditClick}
          />
        )}
      </div>
      <ConfirmationModal
        isOpen={!!deleteConfirmation}
        onClose={() => setDeleteConfirmation(null)}
        onConfirm={confirmDelete}
        title="Konfirmasi Hapus"
        message="Apakah Anda yakin ingin menghapus produk ini? Tindakan ini tidak dapat dibatalkan."
      />
    </section>
  );
}

function ConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
