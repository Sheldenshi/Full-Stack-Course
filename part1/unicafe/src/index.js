import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Paragraph = ({text, value}) => {
  return (
    <p>
      {text} {value}
    </p>
  )
} 

const Statistics = ({name, value, ending}) => {
  return (
    <tbody>
      <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{ending}</td>
    </tr>
    </tbody>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good === 0 && neutral === 0 && bad ===0) {
    return (
      <div>
        <Display text="give feedback"/>
        <Button handleClick={() => setGood(good + 1)} text = "good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text = "bad"/>
        <Paragraph text = "No feedback given"/>
      </div>
    )
  } else {
    return (
    
      <>
        <Display text="give feedback"/>
        <Button handleClick={() => setGood(good + 1)} text = "good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text = "bad"/>
        <Display text="statistics"/>
        <table>
          <Statistics name = "good" value = {good}/>
          <Statistics name = "neutral" value = {neutral}/>
          <Statistics name = "bad" value = {bad}/>
          <Statistics name = "all" value = {good + neutral + bad}/>
          <Statistics name = "average" value = {(good - bad) / (good + neutral + bad)}/>
          <Statistics name = "positive" value = {good / (good + neutral + bad)} ending = "%"/>
        </table>
        
      </>
    )
  }
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)