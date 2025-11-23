function CategoryFilter() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Kategori:</label>
      <select style={{ width: "100%" }}>
        <option value="">Semua</option>
        <option value="elektronik">Elektronik</option>
        <option value="fashion">Fashion</option>
        <option value="alat tulis">Alat Tulis</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
