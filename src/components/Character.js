import React from 'react'

const Character = (props) => {
    console.log(props.think)
    return (
        <div className="content">
            <h3>
            <p>VALUE:</p> 
            <p>{props.think.value}</p>
            <p>CATEGORY:</p> 
            <p>{props.think.category.title}</p>
            <p>ANSWER:</p> 
            <p>{props.think.question}.</p>
            </h3>
        </div>
    )
}

export default Character