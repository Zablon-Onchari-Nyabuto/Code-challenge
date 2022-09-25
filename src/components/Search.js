import React from "react";

function Search({props}) {
  const handleSearch = (evt) => {
    props.searchFun(evt.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        // value={props.search}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
