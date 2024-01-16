import React from 'react'
import { useId } from 'react'

function RadioButton({
    name,
    radioName
}, ref) {

    const id = useId();


    return (
        <div>
            <input type="radio" name={radioName} id={id} value={name} class={`hidden peer`} ref={ref}/>
            <label for={id} class={`cursor-pointer flex bg-transparent rounded-xl border-2 border-dashed border-orange-500 p-3 group-hover:border-gray-700 peer-checked:border-green-500 transition text-center`}>
                <h2 class="text-white text-center">{name}</h2>
            </label>
        </div>
    )
}

export default React.forwardRef(RadioButton)
