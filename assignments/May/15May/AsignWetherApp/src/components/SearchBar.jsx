const SearchBar = ({ city, setCity, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="search-bar mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
