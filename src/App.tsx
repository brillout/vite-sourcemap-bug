import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const err = new Error().stack
  console.log('\n[before ssrFixStacktrace]');
  console.log(err)
  // @ts-ignore
  if (globalThis.vite) {
    // @ts-ignore
    globalThis.vite.ssrFixStacktrace(err)
    console.log('\n[after ssrFixStacktrace]');
    console.log(err)
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
