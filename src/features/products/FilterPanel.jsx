import CategoryFilter from "../filters/CategoryFilter";
import PriceRangeFilter from "../filters/PriceRangeFilter";
import StockStatusFilter from "../filters/StockStatusFilter";

function FilterPanel({ filters, setFilters }) {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <aside style={{
      padding: "1rem",
      border: "1px solid #ddd",
      width: "240px"
    }}>
      <h3>Filters</h3>

      <CategoryFilter
        value={filters.category}
        onChange={(val) => handleFilterChange("category", val)}
      />
      <PriceRangeFilter
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onPriceChange={(min, max) => setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }))}
      />
      <StockStatusFilter
        value={filters.stockStatus}
        onChange={(val) => handleFilterChange("stockStatus", val)}
      />
    </aside>
  );
}

export default FilterPanel;
