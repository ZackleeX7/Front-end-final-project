function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
    >
      Edit
    </button>
  );
}

export default EditButton;