import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();
    const transactionData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
  }
  fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionData),
  })
    .then((r) => r.json())
    .then((newTransaction) => onAddTransaction(newTransaction));


  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type="text" name="description" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
          <input type="text" name="category" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)}/>
          <input type="number" name="amount" value={amount} placeholder="Amount" step="0.01" onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

