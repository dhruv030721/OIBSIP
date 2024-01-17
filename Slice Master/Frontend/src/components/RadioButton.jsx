import React from 'react'
import { useId } from 'react'

function RadioButton({
    name,
    radioName,
    price=0,
    checked,
    onChange,
    ...props
}) {

    const id = useId();


    return (
        <div>
            <input type="radio" name={radioName} value={`${name}-${price}`} id={name} className={`hidden peer`} {...props} onChange={onChange}/>
            <label htmlFor={name} className={`cursor-pointer flex bg-transparent rounded-xl border-2 border-dashed border-orange-500 p-3 group-hover:border-gray-700 peer-checked:border-green-500 transition text-center`}>
                <div className='flex justify-between w-full'>
                    <h2 className="text-white text-center text-sm">{name}</h2>
                    {price!=0 && (<h2 className="text-white text-center text-sm">{price}/-</h2>)}
                </div>
            </label>
        </div>
    )
}

export default RadioButton
