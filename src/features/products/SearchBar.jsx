const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
};

export default SearchBar;