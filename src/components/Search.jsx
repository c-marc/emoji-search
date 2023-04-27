const Search = ({ searchPattern, setSearchPattern }) => {
  return (
    <header>
      <h1>🦀 Emoji Search 🦀</h1>
      <input
        type="text"
        value={searchPattern}
        onChange={(e) => setSearchPattern(e.target.value)}
        placeholder="Which emoji are you looking for ?"
      />
    </header>
  );
};

export default Search;
