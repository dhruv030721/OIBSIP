import React, {useId, useState} from 'react'

function FileInput({
    labelname,
    ...props
},ref) {

    const id = useId();

    const [Name, setlabelname] = useState(labelname);

  return (
    <div>
     <input type="file"  id={id} className={`hidden peer`} {...props}/>
            <label htmlFor={id} className={`cursor-pointer flex bg-transparent rounded-xl border-2 border-dashed border-white py-4 group-hover:border-gray-700 peer-checked:border-green-500 transition text-center`}>
                <div className='flex justify-center w-full'>
                    <h2 className="text-white text-center text-sm">{Name}</h2>
                </div>
            </label>
    </div>
  )
}

export default React.forwardRef(FileInput)
