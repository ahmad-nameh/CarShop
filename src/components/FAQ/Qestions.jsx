import { React, useState } from 'react'
import questions from '../../db/questions'
import { FaChevronDown } from "react-icons/fa";

const Qestions = () => {

  const[openAnswerState,setOpenAnswerState] = useState(Array(questions.length).fill(false))

  function openAnswer(index) {
    setOpenAnswerState(
      prevState => {
        const newState = [...prevState]; 
        newState[index] = prevState[index] ? false : true; 
        return newState;
      }
    )
  }
  return (
    <>
    {questions.map((item,index) => {
      return(
        <div key={index}>
          <p 
            className='qestion flex justify-between items-center' 
            onClick={()=>openAnswer(index)}
          >
            {item.question} 
            <FaChevronDown/>
          </p>
          
          <p className= {`answer ${openAnswerState[index] ? "open2" : ""}`} >{item.answer}</p>
        </div>
      )
    })}
      
    </>
  )
}

export default Qestions
