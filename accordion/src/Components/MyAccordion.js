import React, { useState } from 'react'

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(true);
  return (
    <>
        <div className='main-heading'>
            <p onClick={()=>setShow(!show)}>{show? "-": "+" }</p>
            <h3>{question}</h3>
        </div>

            {show && <p>{answer}</p>}
    </>
  )
}

export default MyAccordion
