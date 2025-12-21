import React, { useState, useEffect } from "react"

const App = () => {
  const [count, setCount] = useState(0);
  const [initialTime, setInitialTime] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setInitialTime(time);
    console.log('Prima desenare la:', time);
  }, [])

  return (
    <div className="container">
      <p>Prima desenare la: <strong>{initialTime}</strong></p>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div >
  )

}

export default App;
