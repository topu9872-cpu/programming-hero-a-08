import { FaSearch } from "react-icons/fa";
const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="mb-6 flex justify-end">
      <label className="input flex items-center gap-2 border p-2 rounded-lg">
        <FaSearch className="opacity-55" />
        <input
          type="search"
          className="grow"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
        />
      </label>
    </div>
  );
};

export default SearchBar;
