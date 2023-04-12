import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const onChangeYearHandler = (year) => {
    setYear(year);
  };
  const filterYearExpense = props.expenses.filter(function (expense) {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} selectYear={onChangeYearHandler} />
      <ExpenseChart expenses={filterYearExpense} />
      <ExpensesList item={filterYearExpense} />
    </Card>
  );
};
export default Expenses;
