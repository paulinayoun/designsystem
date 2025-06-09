import { useState, useEffect } from 'react'
import PowerTile from './components/business/PowerTile/PowerTile'
import './styles/variables.css'
import './index.css'
import './App.css'

function App() {
  const [powerValue, setPowerValue] = useState(8765.43)

  // 🎯 실시간 랜덤 값 생성 (1초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      // -1000 ~ 9999999 범위에서 랜덤 값 생성
      const randomValue = Math.floor(Math.random() * 10099) - 1000;
      setPowerValue(randomValue);
    }, 1000);

    // 🧹 컴포넌트 언마운트시 클리어
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>전력량 대시보드</h1>
      
      <PowerTile 
        title="현재 전력량"
        value={powerValue}
        subtitle="실시간 사용량"
      />
      <br />
      <div>
        <button onClick={() => setPowerValue(18340)}>정상 값</button>
        <button onClick={() => setPowerValue(75000)}>주의 값</button>
        <button onClick={() => setPowerValue(125000)}>위험 값</button>
      </div>
    </>
  )
}

export default App