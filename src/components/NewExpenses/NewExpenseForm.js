import "./NewExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
  const [titleChange, setTitle] = useState("");
  const [amountChange, setAmount] = useState("");
  const [dateChange, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const setTitleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
  };
  const setAmountHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const setDateHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleChange,
      amount: +amountChange,
      date: new Date(dateChange),
    };
    // console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    props.onSaveExpenseDate(expenseData);
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleChange} onChange={setTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountChange}
            onChange={setAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateChange}
            onChange={setDateHandler}
          />
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
