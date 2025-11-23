function ProductItem({ product }) {
  return (
    <div style={{
      padding: "0.8rem",
      border: "1px solid #ccc",
      marginBottom: "0.5rem"
    }}>
      
      <h3>{product.name}</h3>
      <p>Harga: {product.price}</p>
      <p>Stok: {product.stock}</p>
      <p>Kategori: {product.category}</p>

      <button>Edit</button>
      <button style={{ marginLeft: "1rem" }}>Delete</button>
    </div>
  );
}

export default ProductItem;
