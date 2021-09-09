import React from 'react'
import ReactDOM from 'react-dom'

// ------- JSX -------//

// return single component
// use camelCase for html attribute
// className instead of class
// fragment 

const Greetings = () => {
  return (
    <>
    <div>
      <h2>This is my first React Component</h2>
    </div>
    <div>
      <h3>Here we are</h3>
    </div>
   </> 
  )
  
}

const root = document.getElementById('root')

ReactDOM.render(<Greetings/>, root)