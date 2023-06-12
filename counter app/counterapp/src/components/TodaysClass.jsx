import React, {useState} from 'react'
import './TodaysClass.css'

const TodaysClass = () => {

    const mydata = [
        {
            UserName: "Eflex",
            Profile: "E",
            UserText: "i love code"
        },
        {
            UserName: "Grace",
            Profile: "g",
            UserText: "i love my code"
        },
        {
            UserName: "Favour",
            Profile: "F",
            UserText: "i love code"
        },
        {
            UserName: "Eze",
            Profile: "E",
            UserText: "i love code"
        }
    ]

const [data, setData] = useState(mydata)

const AddText = () =>{
    setData([{
        UserName: "Ebuka",
        Profile: "E",
        UserText: "i love code"
    }])
}

    console.log(data)
    // console.log(mydata)

  return (
    <div className='Container'>
        <div className='Wrapper'>
            <div className='UserInfo'>
                <div className="UserinfoText">
                    <input type="text"  placeholder='UserName'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='What on your mind?'/>
                    <button className='Btn' onClick={AddText}>Add Text</button>
                </div>
            </div>
            
            <div className='UserOutput'>
                   {
                    data.map((props)=>(
                        <div className='OutPutCard'>
                        <div className='CardHeader'>
                            <h6>{props.UserName}</h6>
                            <span>X</span>
                            <div className='Profile'>{props.Profile}</div>
                        </div>
                        <div className='CardText'>
                            <p>{props.UserText}</p>
                        </div>

                    </div>
                    ))
                   }
                </div>
        </div>
    </div>
  )
}

export default TodaysClass