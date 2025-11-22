const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="px-3 py-1 text-sm border rounded text-red-600 hover:bg-red-100"
    >
      Delete
    </button>
  );
};

export default DeleteButton;