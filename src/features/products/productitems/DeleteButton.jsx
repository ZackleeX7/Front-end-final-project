function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
    >
      Hapus
    </button>
  );
}

export default DeleteButton;