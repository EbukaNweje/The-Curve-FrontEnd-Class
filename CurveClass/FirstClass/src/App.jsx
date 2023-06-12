import React from 'react'

const App = () => {
  let show = false
  const Clickme = () => {
    console.log("first")
    show = true
  }

  return (
    <div>
      <button onClick={Clickme}>Click Me</button>
     {show ? <div>
     <input type="text" placeholder='What on your mind' />
      <button>Click</button>
     </div>: null}
    </div>
  )
}

export default App