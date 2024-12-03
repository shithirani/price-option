// import { LineChart } from 'recharts'
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisiNav from './Components/Daisinav/DaisiNav'
import Navber from './Components/Navber/Navber'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
        <Navber></Navber>
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      
      <LineChart></LineChart>

      {/* <DaisiNav></DaisiNav> */}
     
    </>
  )
}

export default App
