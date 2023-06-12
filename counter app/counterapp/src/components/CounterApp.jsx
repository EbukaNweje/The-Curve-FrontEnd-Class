import React, {useState} from 'react'
import Total from './Total'

const CounterApp = () => { 
const[total, setTotal] = useState(0)

    const Addme = () => {
        setTotal(total + 1)
    }
    const Musme = () => {
        setTotal(total - 1)
    }


  return (
    <div>
        <button onClick={Addme}>+</button>
        <span>Total {total}</span>
        <button onClick={Musme}>-</button>

        {/* <Total totals= {total}/> */}
    </div>
  )

  }
export default CounterApp