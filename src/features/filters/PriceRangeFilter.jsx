function PriceRangeFilter() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Rentang Harga:</label>

      <input type="number" placeholder="Min" style={{ width: "45%" }} />
      <input type="number" placeholder="Max" style={{ width: "45%", marginLeft: "10%" }} />
    </div>
  );
}

export default PriceRangeFilter;
