import React from 'react'

const Input = ({ placeholder, type }) => {
    return (
        <div>
           <input type={type} placeholder={placeholder} /> 
        </div>
    )
}

export default Input
