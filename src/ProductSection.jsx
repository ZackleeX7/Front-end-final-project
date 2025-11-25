import ProductList from "./features/products/ProductList"
import EmptyState from "./features/products/EmptyState";
import ProductForm from "./features/products/productforms/ProductForm";
import SearchBar from "./features/products/SearchBar";
import FilterPanel from "./features/products/FilterPanel";

function ProductSection({ products = [] }) {
  return (
<section className="p-6">
  <div className="flex justify-center mb-6">
    <ProductForm />
  </div>
  <h2 className="text-xl flex justify-center font-semibold mb-4">Product Inventory</h2>
  <div className="mt-4">
    <SearchBar/>
    <FilterPanel/>
    {products.length === 0 ? <EmptyState /> : <ProductList products={products} />}
  </div>
</section>
  );
}

export default ProductSection;
