const Filter = ({ filterValue, handleFilterChange }) => (
  <div>
    filter shown with:{" "}
    <input onChange={handleFilterChange} value={filterValue} />
  </div>
);

export default Filter;
