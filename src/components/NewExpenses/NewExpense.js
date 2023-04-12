import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const addExpenseData = {
      id: Math.random(),
      ...expenseData,
    };
    props.addNewExpenses(addExpenseData);
  };
  const [isEditing, setEditing] = useState(false);
  const setEditingHandler = () => {
    setEditing(true);
  };
  const stopEditing = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onCancel={stopEditing}
          onSaveExpenseDate={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
