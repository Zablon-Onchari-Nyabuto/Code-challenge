import React from "react";

const Find = (props) => {
    const handleFind = (e) => {
        props.FindFun(e.target.value)
    }
  return (
   <div>
     <select value={props.find} onChange={handleFind}>
        <option value={"all"}>All</option>
        <option value={"dateUP"}>Find by date (ASC)</option>
        <option value={"dateDOWN"}>Find by date (DESC)</option>
        <option value={"descriptionUP"}>Find by description (ASC)</option>
        <option value={"descriptionDOWN"}>Find by description (DESC)</option>
        <option value={"categoryUP"}>Find by category (ASC)</option>
        <option value={"categoryDOWN"}>Find by category (DESC)</option>
        <option value={"amountUP"}>Find by amount (ASC)</option>
        <option value={"amountDOWN"}>Find by amount (DESC)</option>
     </select>
   </div>
  )
}

export default Find;