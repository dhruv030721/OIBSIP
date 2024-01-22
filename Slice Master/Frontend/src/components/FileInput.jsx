// FileInput.js
import React, { useId, forwardRef } from 'react';

function FileInput({ labelname, FileHandler, ...props }, ref) {
  const id = useId();


  return (
    <div>
      <input
        type="file"
        id={id}
        className={`hidden`}
        ref={ref}
        onChange={FileHandler}
        {...props}
      />
      <label
        htmlFor={id}
        className={`cursor-pointer flex bg-transparent rounded-xl border-2 border-dashed border-white py-4 group-hover:border-gray-700 peer-checked:border-green-500 transition text-center`}
      >
        <div className='flex justify-center w-full'>
          <h2 className="text-orange-500 text-center text-sm">{labelname}</h2>
        </div>
      </label>
    </div>
  );
}

export default forwardRef(FileInput);
