import React from 'react'
import ReactDOM from 'react-dom'

/*
const App = () => {
  //console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'It is ', now.toString()
    ),
    React.createElement(
      'p', null, a, 'plus', b, 'is', a + b
    )
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/

const Hello = (props) => {  
  return (
      <div>      
        <p>Hello {props.name}, you are {props.age} years old</p>    
      </div>  )}
const App = () => {
  const name = "Shelden"
  const age = 21
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age}/> 
      <Hello name = "Kat" age = {17 + 2}/>   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))