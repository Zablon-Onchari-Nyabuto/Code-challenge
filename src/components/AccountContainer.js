import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsListed, setTransactionsListed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => setTransactionsListed(data));
    }, []);

  function addTransaction(newTransaction) {
    const updateTransactions = [...transactionsListed, newTransaction]
    setTransactionsListed(updateTransactions)
  }
  
  function searchTransaction(newSearch){
    setSearch(newSearch)
  }

  return (
    <div>
      <Search search={search} onSearchTransaction={searchTransaction} />
      <AddTransactionForm onAddTransaction={addTransaction}/>
      <TransactionsList transactionsListed={transactionsListed} search={search} />
    </div>
  );
}

export default AccountContainer;

