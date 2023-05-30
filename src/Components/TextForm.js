import React, { useState } from 'react'

const Textform = (props) => {

    const [text, setText] = useState('')


    const toUpperCase = () => {
        setText(text.toUpperCase())
    }

    const toLowerCase = () => {
        setText(text.toLowerCase())
    }

    const toClear = () => {
        setText('')
    }

    const changeText = (event) => {
        setText(event.target.value)
    }



    return (

        <>
            <div className="container">
                <h1 className='my-3 text-center'>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" id="formTextArea" value={text} onChange={changeText} rows="5" ></textarea>
                </div>

                <button type="button" className="btn btn-primary mx-2" onClick={toUpperCase}>Convert To Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={toLowerCase}>Convert To Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={toClear}>Clear</button>
            </div>


            <div className="container mt-5">
                <h2>Your text summary</h2>
                <p><b>{text.split(' ').length}</b> words and <b>{text.length}</b> charactrs</p>


                <h3>Text Preview</h3>
                <p>{text}</p>

            </div>

        </>

    )
}

export default Textform;