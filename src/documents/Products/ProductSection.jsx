import ProductList from "./ProductList";
import EmptyState from "./EmptyState";

function ProductSection({ products }) {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Product Inventory</h2>

      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <ProductList products={products} />
      )}
    </section>
  );
}

export default ProductSection;
