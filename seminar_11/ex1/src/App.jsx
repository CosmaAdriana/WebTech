import React, { useState } from "react"
import ConditionalComponent from "./ConditionalComponent"

const App = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="container">
      <div>
        <p>Today you've taken {steps} steps!</p>
        <button onClick={() => setSteps(steps + 1)}>Click Me</button>
      </div>

      <ConditionalComponent />
    </div >
  )

}

export default App;
