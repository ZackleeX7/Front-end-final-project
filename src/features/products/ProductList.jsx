import ProductItem from "./productitems/ProductItem";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductList;
