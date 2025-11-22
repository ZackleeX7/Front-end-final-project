import { useState } from "react";
import InputField from "./InputField.jsx";
import SelectField from "./SelectField.jsx";
import SubmitButton from "./Submitbutton.jsx";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", form);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-5 rounded-lg shadow-md max-w-sm"
    >
      <h2 className="text-xl font-semibold mb-4">Tambah Produk</h2>
      <InputField form={form} setForm={setForm} />
      <SelectField
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <SubmitButton />
    </form>
  );
}

export default ProductForm;