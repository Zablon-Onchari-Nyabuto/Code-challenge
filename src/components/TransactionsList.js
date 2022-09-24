import React from "react";
import Transaction from "./Transaction";

function TransactionsList(transactions) { 
  const transactionsList = transactions.map (() => (
  <Transaction
  key={transactions.id}
  date={transactions.date}
  description={transactions.description}
  category={transactions.category}
  amount={transactions.amount}
/>
));
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionsList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
