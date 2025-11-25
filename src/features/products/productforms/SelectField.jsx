function SelectField({ value, onChange }) {
  const categories = ["Elektronik", "Fashion","Alat Tulis"];
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium mb-1">Kategori</label>
      <select
        value={value}
        onChange={onChange}
        className="border rounded-md p-2 w-full"
      >
        <option value="">Pilih kategori...</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;