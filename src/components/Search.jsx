const Search = ({ searchPattern, setSearchPattern }) => {
  return (
    <header>
      <h1>🦀 Emoji Search 🦀</h1>
      <input
        type="search"
        value={searchPattern}
        onChange={(e) => setSearchPattern(e.target.value)}
        placeholder="Which emoji are you looking for ?"
        aria-label="Search"
      />
    </header>
  );
};

export default Search;
