import React, { useId } from 'react'

function Input({
    label,
    type = "text",
    className = "",
    divclassName = "",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className={`flex flex-col font-bold ${divclassName}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className={`outline-none border-b-2 border-black text-sm mt-2 ${className}`} ref={ref} {...props}/>
        </div>
    )
}

export default React.forwardRef(Input)
