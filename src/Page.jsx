import React, { useState } from 'react';
import Basket from './Basket';
import Filters from './Filters';

function Page() {
    const [filter, setFilter] = useState(false);
    const [basket, setBasket] = useState(false);

    function openFilters() {
        setFilter(!filter);
    }

    function openBasket() {
        setBasket(!basket);
    }

  return (
    <>
    <div class="flex h-2/5 w-full justify-evenly flex-row space-x-2 bg-white px-1 py-6">
      <input value="Nifty" placeholder="Scrip" class="h-12 w-36 rounded-lg border border-gray-500 px-2" />
      <input value="18 May 2023" placeholder="Esp" class="h-12 w-36 rounded-lg border border-gray-500 px-2" />
    <div class="flex flex-col">
      <h1 class="text-xs">Spot</h1>
      <h2 class="text-lg text-black">0.35%<span class="ml-2 text-xs text-green-400">18245.3</span></h2>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xs">Fut</h1>
      <h2 class="text-lg text-black">0.35%<span class="ml-2 text-xs text-green-400">18251.1</span></h2>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xs text-gray-600">Max pain</h1>
      <h2 class="text-lg font-semibold">18200</h2>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xs text-gray-600">PCR</h1>
      <h2 class="text-lg font-semibold">0.92</h2>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xs text-gray-600">Support</h1>
      <h2 class="text-lg font-semibold">18100</h2>
    </div>
    <div class="flex flex-col">
      <h1 class="text-xs text-gray-600">Resistance</h1>
      <h2 class="text-lg font-semibold">18500</h2>
    </div>
    <div class="flex h-full flex-col space-y-4 px-2 py-2">
      <div class="flex space-x-4">
        <button onClick={openFilters}>Filter</button>
        {filter && <Filters xyz={openFilters} />}
        <button onClick={openBasket} class="bg-blue-600 px-4 py-1">Basket</button>
        {basket && <Basket xyz={openBasket} />}
        <h2 class="relative right-6 text-center -top-1 text-xs h-5 w-5 bg-yellow-500 rounded-full">3</h2>
      </div>
      <div class="flex space-x-2">
        <button class="bg-blue-600 px-4 py-1 text-white rounded-lg">LTP</button>
        <button class="bg-gray-400 px-4 py-1 text-black rounded-lg">Greeks</button>
      </div>
    </div>
  </div>
    </>
  )
}
export default Page;