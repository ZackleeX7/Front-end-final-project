import StockBadge from "./StockBadge";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function ProductItem({ product, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Kategori: {product.category}</p>
        <StockBadge stock={product.stock} />
      </div>
      <div className="flex gap-2">
        <EditButton onClick={() => onEdit(product)} />
        <DeleteButton onClick={() => onDelete(product.id)} />
      </div>
    </div>
  );
}

export default ProductItem;
