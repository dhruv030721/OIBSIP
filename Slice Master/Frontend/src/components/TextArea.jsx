import React from 'react'

function TextArea({
    label,
    className = "",
    ...props
}, ref) {
    return (
        <div className='flex flex-col text-white'>
            <label htmlFor="">{label}</label>
            <textarea name="" id="" cols="30" rows="10" className={`bg-transparent border-b-2 border-orange-500 outline-none ${className}`} {...props} ref={ref}></textarea>
        </div>
    )
}

export default React.forwardRef(TextArea)
