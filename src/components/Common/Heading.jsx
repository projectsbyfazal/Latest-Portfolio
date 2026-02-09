import React from 'react'

const Heading = ({ text, subText, color = "#222" }) => {
    return (
        <div className='main-heading'>
            <span style={{ color }}>{text}</span> <span className='orange'>{subText}</span>
        </div>
    )
}

export default Heading