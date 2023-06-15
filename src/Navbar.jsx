import React from 'react';

function Navbar() {
  return (
    <>
    <nav class="h-16 w-full shadow-md shadow-zinc-800 justify-evenly flex bg-gray-50 space-x-4 px-10">
    <section class="flex items-center h-full px-1">
      <h1 class="text-xl font-bold">Track<br /> Trades</h1>
    </section>
    <ul class="flex space-x-5 text-sm font-semibold items-center">
      <li>Dashboard</li>
      <li class="text-blue-400">Option chain</li>
      <li>Strategy builder</li>
      <li>Positions</li>
      <li>Order book</li>
    </ul>
    <section class="flex space-x-2 items-center">
      <div class="flex flex-col">
        <h1 class="text-xs text-end">Nifty</h1>
        <h2 class="text-green-500 text-xs">0.35%<span class="ml-2 text-lg text-black">18245.83</span></h2>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xs text-end">Bankifty</h1>
        <h2 class="text-green-500 text-xs">0.7%<span class="ml-2 text-lg text-black">39156.1</span></h2>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xs text-end">India VIX</h1>
        <h2 class="text-red-400 text-xs">-10.9%<span class="ml-2 text-lg text-black">12.12</span></h2>
      </div>
    </section>
    <section class="flex items-center">
      <button>Profile</button>
    </section>
  </nav>
    </>
  )
}
export default Navbar;