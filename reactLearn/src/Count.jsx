import {useState} from 'react'

function Count() {
  const [color, setColor] = useState("red")

  return (
   <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg" >
          <button onClick={() => setColor("red")} className="bg-red-500 text-white px-4 py-2 rounded" style={{backgroundColor:  "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="bg-green-500 text-white px-4 py-2 rounded" style={{backgroundColor:  "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="bg-blue-500 text-white px-4 py-2 rounded" style={{backgroundColor:  "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-white px-4 py-2 rounded" style={{backgroundColor:  "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className="bg-purple-500 text-white px-4 py-2 rounded" style={{backgroundColor:  "purple" }}>Purple</button>
        </div>
      </div>
      </div>
   </>
  )
}

export default Count