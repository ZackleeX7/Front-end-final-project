function InputField({ form, setForm }) {
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Nama Produk</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Masukkan nama produk"
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Harga (Rp)</label>
        <input
          type="number"
          value={form.price}
          onChange={(e) => handleChange("price", e.target.value)}
          placeholder="50000"
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Stok</label>
        <input
          type="number"
          value={form.stock}
          onChange={(e) => handleChange("stock", e.target.value)}
          placeholder="10"
          className="border rounded-md p-2 w-full"
        />
      </div>
    </>
  );
}

export default InputField;