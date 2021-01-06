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
*/
const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
    
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

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

