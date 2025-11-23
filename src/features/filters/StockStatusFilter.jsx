function StockStatusFilter() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Status Stok:</label>

      <select style={{ width: "100%" }}>
        <option value="">Semua</option>
        <option value="tersedia">Tersedia</option>
        <option value="habis">Habis</option>
      </select>
    </div>
  );
}

export default StockStatusFilter;
