import React, {useId} from 'react'


function Select({
    label,
    options,
    className = "",
    divclassName = "",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className={`${className} flex flex-col text-black gap-y-3` }>
            <label htmlFor="" className='text-white' id={id}>{label}</label>
            <select className={`${className} outline-none rounded-lg px-4 py-2`} id={id}  {...props} ref={ref}>
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
