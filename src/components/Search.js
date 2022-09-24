import React from "react";

function Search({ description, onDescriptionChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

