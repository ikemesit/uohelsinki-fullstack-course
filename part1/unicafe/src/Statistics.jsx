import StatisticsLine from "./Statisticsline";

const Statistics = ({ good, bad, neutral, average, total, positiveFeedbackPercentage }) => {

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>);
  }
   
  return (
    <table>
      <thead>
        <tr><th colspan="2">Statistics</th></tr>
      </thead>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="Total" value={total} />
        <StatisticsLine text="Average Score" value={average} />
        <StatisticsLine text="Positive Feedback %" value={positiveFeedbackPercentage} />
      </tbody>
    </table>);
}
  
export default Statistics;