import { useState } from 'react';
import Layout from './Layout';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Layout setCount={setCount} count={count}/>
    </div>
  )
}

export default App
