import React from "react";

function Transaction() {
  return (
    <tr>
      <td>{Transaction.date}</td>
      <td>{Transaction.description}</td>
      <td>{Transaction.category}</td>
      <td>{Transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
