import React, { useState } from 'react'



export default function Join() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>game</button>
      {count}
    </div>
  )
}
