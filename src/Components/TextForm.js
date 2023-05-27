import React, { useState } from 'react'

const Textform = (props) => {

    const [text, setText] = useState('')


    const upperCase = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const changeText = (event) => {
        event.target.value()
    }



    return (
        <div>
            <h1 className='my-3 text-center'>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" id="formTextArea" onChange={changeText} rows="5" ></textarea>
            </div>

            <button type="button" className="btn btn-primary" onClick={upperCase}>Convert To Uppercase</button>



            <div className="container">

            </div>
        </div>

    )
}

export default Textform