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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text = "good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "bad"/>
      <Display text="statistics"/>
      <Paragraph text = "good" value = {good}/>
      <Paragraph text = "neutral" value = {neutral}/>
      <Paragraph text = "bad" value = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)