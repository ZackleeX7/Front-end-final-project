function SubmitButton({ label = "Tambah Produk" }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
    >
      {label}
    </button>
  );
}

export default SubmitButton;