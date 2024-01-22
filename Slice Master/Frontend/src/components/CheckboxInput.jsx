import React, { useId } from 'react'

function CheckboxInput({
    ...props
}, ref) {

    const id = useId();

    return (
        <div>
            <input type="checkbox" id={id} className={`hidden peer`} {...props} ref={ref} />
            <label htmlFor={id} className={`cursor-pointer flex bg-transparent rounded-xl border-2 border-dashed border-white py-4 group-hover:border-gray-700 peer-checked:border-green-500 transition text-center`}>
                <div className='flex justify-center w-full'>
                    <h2 className="text-orange-500 text-center text-sm">Is Trending?</h2>
                </div>
            </label>
        </div>
    )
}

export default React.forwardRef(CheckboxInput)
