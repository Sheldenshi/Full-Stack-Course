import React, {useState} from 'react'
import ReactDOM from 'react-dom'

/*
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you are probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}




const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
        {text}
    </button>
  )
  
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const plusOne = () => setCounter(counter + 1)
  const minusOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick = {plusOne} text = 'PLUS'/>
      <Button handleClick = {minusOne} text = 'MINUS'/>
      <Button handleClick = {setToZero} text = 'ZERO'/>
    </div>
    
  )
}

/*
let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter}/>,
  document.getElementById('root'))
}
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
*/

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {    
    setAll(allClicks.concat('L'))    
    setLeft(left + 1)  }
  const handleRightClick = () => {    
    setAll(allClicks.concat('R'))    
    setRight(right + 1)  }
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
