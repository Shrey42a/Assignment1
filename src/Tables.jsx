import React from 'react';
import Calls from './Calls';
import Puts from './Puts';
import Strike from './Strike';

function Tables() {
  return (
    <>
    <div class="w-full h-max p-2 flex flex-col">
    <div class="w-full justify-around flex">
      <h1>Calls</h1>
      <h1>Puts</h1>
    </div>
    <div class="w-full flex h-max">
      <Calls />
      <Strike />
      <Puts />
    </div>
  </div>
    </>
  )
}
export default Tables;