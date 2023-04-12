import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
  const valueArray = props.expenses.map((expense) => {
    return expense.value
  })
  const maxValueTotal = Math.max(...valueArray)
  return (
    <div className="chart">
      {props.expenses.map((expenses) => (
        <ChartBar
          key={expenses.label}
          maxValue={maxValueTotal}
          value={expenses.value}
          label={expenses.label}
        />
      ))}
    </div>
  )
}

export default Chart
