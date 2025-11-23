const StockBadge = ({ stock }) => {
  let color = "bg-green-200 text-green-800";

  if (stock === 0) {
    color = "bg-red-200 text-red-800";
  } else if (stock < 5) {
    color = "bg-yellow-200 text-yellow-800";
  }

  return (
    <span className={`px-2 py-1 text-xs rounded ${color}`}>
      Stok: {stock}
    </span>
  );
};

export default StockBadge;