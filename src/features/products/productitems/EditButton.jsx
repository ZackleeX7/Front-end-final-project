const EditButton = ({ onEdit }) => {
  return (
    <button
      onClick={onEdit}
      className="px-3 py-1 text-sm border rounded text-blue-600 hover:bg-blue-50" // Change color for 'Edit'
    >
      Edit
    </button>
  );
};

export default EditButton;