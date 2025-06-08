import { useState } from 'react'
import PowerTile from './components/business/PowerTile/PowerTile'
import './styles/variables.css'
import './index.css'
import './App.css'

function App() {
  const [powerValue, setPowerValue] = useState(8765.43)

  return (
    <>
      <h1>전력량</h1>
      
      <PowerTile 
        title="현재 전력량"
        value={powerValue}
        subtitle="실시간 사용량"
      />
      <br />
      <div>
        <button onClick={() => setPowerValue(1234)}>작은 값</button>
        <button onClick={() => setPowerValue(125000)}>큰 값</button>
        <button onClick={() => setPowerValue(75000)}>경고 값</button>
      </div>
    </>
  )
}

export default App