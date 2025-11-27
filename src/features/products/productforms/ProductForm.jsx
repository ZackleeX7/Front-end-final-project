import { useState, useEffect } from "react";
import InputField from "./InputField.jsx";
import SelectField from "./SelectField.jsx";
import SubmitButton from "./SubmitButton.jsx";

function ProductForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        name: "",
        price: "",
        stock: "",
        category: "",
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };
    onSubmit(productData);
    if (!initialData) {
      setForm({
        name: "",
        price: "",
        stock: "",
        category: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-lg w-full"
    >
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Produk" : "Tambah Produk"}
      </h2>
      <InputField form={form} setForm={setForm} />
      <SelectField
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <div className="flex gap-2 mt-4">
        <SubmitButton label={initialData ? "Update" : "Simpan"} />
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;