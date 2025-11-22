import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
