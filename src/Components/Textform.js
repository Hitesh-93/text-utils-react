import React from 'react'

const Textform = (props) => {
    return (
        <>
            <h1 className='my-3 text-center'>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}

export default Textform