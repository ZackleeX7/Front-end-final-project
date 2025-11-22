function CategoryFilter() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Kategori:</label>
      <select style={{ width: "100%" }}>
        <option value="">Semua</option>
        <option value="makanan">Makanan</option>
        <option value="minuman">Minuman</option>
        <option value="elektronik">Elektronik</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
