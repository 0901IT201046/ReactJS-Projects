import React from 'react';
import Part1 from './Components/Part1';
import Part2 from './Components/Part2';
import Part3 from './Components/Part3';
import Part4 from './Components/Part4';

const App = () => {
  return (
    <div>
      <div className='header'>
        <Part1 />
        <Part2 />
      </div>
      <div className='footer'>
        <Part3 />
        <Part4 />
      </div>
    </div>
  )
}

export default App