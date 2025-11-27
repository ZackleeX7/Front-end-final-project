function PriceRangeFilter({ minPrice, maxPrice, onPriceChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Rentang Harga:</label>

      <input
        type="number"
        placeholder="Min"
        style={{ width: "45%" }}
        value={minPrice}
        onChange={(e) => onPriceChange(e.target.value, maxPrice)}
      />
      <input
        type="number"
        placeholder="Max"
        style={{ width: "45%", marginLeft: "10%" }}
        value={maxPrice}
        onChange={(e) => onPriceChange(minPrice, e.target.value)}
      />
    </div>
  );
}

export default PriceRangeFilter;
