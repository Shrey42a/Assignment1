import React from 'react';
import 'animate.css';

function Basket() {
  return (
    <>
     <div class="flex animate__animated animate__jackInTheBox absolute right-64 bottom-0 flex-col bg-white h-72 w-1/2">
      <nav class="w-full justify-evenly items-center flex space-x-3 bg-indigo-600 h-16">
        <div class="flex text-white px-1 text-sm flex-col">
           <h1 class="font-thin">Max profit</h1>
           <h2>24000/-</h2>
        </div>
        <div class="flex text-white px-1 text-sm flex-col">
           <h1 class="font-thin">Max loss</h1>
           <h2>unlimited</h2>
        </div>
        <div class="flex text-white px-1 text-sm flex-col">
           <h1 class="font-thin">Risk:Reward</h1>
           <h2>NA</h2>
        </div>
        <div class="flex text-white px-1 text-sm flex-col">
          <h1 class="font-thin">Probability</h1>
          <h2>32%</h2>
        </div>
        <div class="flex text-white px-1 text-sm flex-col">
           <h1 class="font-thin">Breakeven</h1>
           <h2> 38124.2</h2>
        </div>
     </nav>
    <div class="w-full flex flex-col h-max">
      <section class="flex text-xs justify-evenly space-x-2">
        <div class="py-2 w-48">Instruement</div>
        <div class="py-2 w-8">B/S</div>
        <div class="py-2 w-10">Type</div>
        <div class="py-2 w-14">Qty</div>
        <div class="py-2 w-14">Price</div>
        <div class="py-2 w-14">Trigger</div>
        <div class="py-2 w-8"></div>
        <div class="py-2 w-8"></div>
        <div class="py-2 w-8"></div>
      </section>
      <section class="flex text-xs bg-gray-200 justify-evenly space-x-2">
        <div class="py-2 w-48 flex items-center">NIFTY 18MAY23 18200 CE</div>
        <div class="py-2 w-8 flex items-center"><span class="p-1 flex items-center bg-blue-200 font-bold px-1.5">B</span></div>
        <div class="py-2 w-10 flex items-center"><span class="bg-indigo-600 text-white px-2">MIS</span></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="50" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="120.5" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="" /></div>
        <div class="py-2 w-8 text-blue-600 flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>sl</div>
        <div class="py-2 w-8 text-blue-600  flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>tgt</div>
        <div class="py-2 w-8  flex items-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 9H8V19H16V9Z" fill="#000000"/><path d="M14.99 12.29L14.285 11.58L10.99 14.875L9.69999 13.59L8.98999 14.295L10.99 16.29L14.99 12.29Z" fill="#000000"/></svg></div>
      </section>
      <section class="flex text-xs bg-gray-200 justify-evenly space-x-2">
        <div class="py-2 w-48 flex items-center">NIFTY 18MAY23 18200 PE</div>
        <div class="py-2 w-8 flex items-center"><span class="p-1 px-1.5 flex items-center bg-red-200 font-bold">S</span></div>
        <div class="py-2 w-10 flex items-center"><span class="bg-indigo-600 text-white px-2">NRML</span></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="50" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="98.5" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="" /></div>
        <div class="py-2 w-8 text-blue-600 flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>sl</div>
        <div class="py-2 w-8 text-blue-600  flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>tgt</div>
        <div class="py-2 w-8  flex items-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 9H8V19H16V9Z" fill="#000000"/><path d="M14.99 12.29L14.285 11.58L10.99 14.875L9.69999 13.59L8.98999 14.295L10.99 16.29L14.99 12.29Z" fill="#000000"/></svg></div>
      </section>
      <section class="flex text-xs bg-gray-200 justify-evenly space-x-2">
        <div class="py-2 w-48 flex items-center">NIFTY 18MAY23 18200 CE</div>
        <div class="py-2 w-8 flex items-center"><span class="p-1 flex items-center bg-blue-200 font-bold px-1.5">B</span></div>
        <div class="py-2 w-10 flex items-center"><span class="bg-indigo-600 text-white px-2">MIS</span></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="50" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="80.1" /></div>
        <div class="py-2 w-14 flex items-center"><input class="p-1 px-3 w-14" placeholder="" /></div>
        <div class="py-2 w-8 text-blue-600 flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>sl</div>
        <div class="py-2 w-8 text-blue-600  flex items-center"><svg fill="#0b6adf" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></svg>tgt</div>
        <div class="py-2 w-8  flex items-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 9H8V19H16V9Z" fill="#000000"/><path d="M14.99 12.29L14.285 11.58L10.99 14.875L9.69999 13.59L8.98999 14.295L10.99 16.29L14.99 12.29Z" fill="#000000"/></svg></div>
      </section>
    </div>
  </div>
    </>
  )
}
export default Basket;