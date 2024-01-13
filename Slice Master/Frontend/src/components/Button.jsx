import React from 'react';

function Button(
  {
    btnName,
    isIcon = false,
    Icon =  <>&rarr;</>,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div>
      <button
        className={`bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group`}
        type='submit'
        {...props}
        ref={ref}
      >
        <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        {btnName} {isIcon ? Icon : null}
      </button>
    </div>
  );
}

export default React.forwardRef(Button);
