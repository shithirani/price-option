import './App.css'
// import DaisiNav from './Components/Daisinav/DaisiNav'
import Navber from './Components/Navber/Navber'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
        <Navber></Navber>
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      {/* <DaisiNav></DaisiNav> */}
     
    </>
  )
}

export default App
