import React from 'react';
import "animate.css";

function Filters({xyz}) {
  return (
    <>
    <div class="h-96 animate__animated animate__tada shadow-md shadow-zinc-600 absolute right-40 top-36 w-72 space-y-6 bg-white py-2">
      <div class="flex justify-between px-2">
        <a>Filters</a><svg onClick={xyz} className='cursor-pointer' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </div>
      <h1 class="text-sm px-2">Ltp range</h1>
      <div class="flex w-full px-2">
        <div class="flex w-1/2 flex-col space-y-5">
          <input placeholder="Minimum Ltp" class="border w-4/5 border-gray-500 px-1 py-1" />
          <h4>Ltp chngs% by</h4>
          <h4>Specific strike</h4>
          <h4>Display</h4>
        </div>
      <div class="flex w-1/2 flex-col space-y-5">
        <input placeholder="Maximum Ltp" class="border w-4/5 border-gray-500 px-1 py-1" />
        <select class="border w-4/5 border-gray-500 py-1">
          <option>Today open</option>
        </select>
        <input class="px-1 border border-gray-500 w-4/5 py-1" />
        <div class="flex space-x-4">
          <div class="flex space-x-1 items-center">
          <input checked type="checkbox" class="px-1 py-1" /><h2>Calls</h2>
        </div>
         <div class="flex space-x-1 items-center">
          <input checked type="checkbox" class="px-1 py-1" /><h2>Puts</h2>
        </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="w-full flex justify-end space-x-4 px-2">
     <button class="px-4 py-1 border-indigo-500 border text-indigo-600">Reset</button>
     <button class="px-4 py-1 bg-indigo-600 text-white">Apply</button>  
    </div>  
  </div>
    </>
  )
}
export default Filters;