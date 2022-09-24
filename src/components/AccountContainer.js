import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [selectedDescription, setSelectedDescription] = useState("All");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
    }, []);

  function handleDescriptionChange(description) {
    setSelectedDescription(description);
  }

  const transactionsToDisplay = transactions.filter((transactions) => {
    if (selectedDescription === "All") return true;

    return transactions.description === selectedDescription;
  });

  return (
    <div>
      <Search description={selectedDescription}
        onDescriptionChange={handleDescriptionChange}/>
      <AddTransactionForm />
      <ul className="Transactions">
        {transactionsToDisplay.map((transaction) => (
      <TransactionsList key={transaction.id} transaction={transaction}/>
      ))}
      </ul>
    </div>
  );
}

export default AccountContainer;

