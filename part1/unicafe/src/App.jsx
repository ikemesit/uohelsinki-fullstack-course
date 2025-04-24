import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
import Statistics from './Statistics.jsx'





const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (currentState, setState) => setState(currentState + 1);

  const getTotal = () => good + neutral + bad;

  const getAverage = () => {
    const totalFeedback = (good * 1) + (bad * -1);
    const average = totalFeedback / getTotal();
    return average;
  }

  const getPercentagePositive = () => {
    const total = getTotal();
    return total > 0 ? (good / total) * 100 : 0;
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => handleClick(good, setGood)} text={'good'} />
      <Button onClick={() => handleClick(neutral, setNeutral)} text={'neutral'} />
      <Button onClick={() => handleClick(bad, setBad)} text={'bad'} />
      <Statistics
        good={good}
        neutral={neutral} 
        bad={bad} 
        average={getAverage()} 
        total={getTotal()} 
        positiveFeedbackPercentage={getPercentagePositive()} />
    </div>
    
  )
}


export default App
