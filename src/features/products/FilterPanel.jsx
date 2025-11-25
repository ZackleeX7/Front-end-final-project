import CategoryFilter from "../filters/CategoryFilter";
import PriceRangeFilter from "../filters/PriceRangeFilter";
import StockStatusFilter from "../filters/StockStatusFilter";

function FilterPanel() {
  return (
    <aside style={{
      padding: "1rem",
      border: "1px solid #ddd",
      width: "240px"
    }}>
      <h3>Filters</h3>

      <CategoryFilter />
      <PriceRangeFilter />
      <StockStatusFilter />
    </aside>
  );
}

export default FilterPanel;
