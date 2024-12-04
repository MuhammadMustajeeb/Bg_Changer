import { useState } from 'react'
import './index.css'

function App(){
  const [color, setcolor] = useState("white")
  
  return(

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center rounded-3xl gap-4 bg-white px-3 py-2 shadow-lg'>
          <button 
          onClick= {()=> setcolor('brown')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'brown'}}>brown</button>

          <button 
          onClick= {()=> setcolor('black')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'black'}}>black</button>

          <button 
          onClick= {()=> setcolor('red')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'red'}}>red</button>

          <button 
          onClick= {()=> setcolor('green')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'green'}}>green</button>

          <button 
          onClick= {()=> setcolor('pink')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'pink'}}>pink</button>

          <button 
          onClick= {()=> setcolor('purple')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'purple'}}>purple</button>

          <button 
          onClick= {()=> setcolor('gray')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'gray'}}>gray</button>

          <button 
          onClick= {()=> setcolor('yellow')}
          className='outline-none rounded-full text-white px-4 py-1 shadow-lg' style={{backgroundColor: 'yellow'}}>yellow</button>
        </div>
      </div>
    </div>

  )
}

export default App