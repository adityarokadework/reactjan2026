
import './App.css'
import Footer from './components/Common/Footer'
// import Navbar1 from './components/Common/Navbar1'
// import About from './pages/About'
// import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Pricing from './pages/Pricing'
// import NavBar from './components/NavBar'
import CounterPage from './pages/CounterPage'
import UseState from './pages/UseState'
import UseEffectPage from './pages/UseEffectPage'


function App() {

  return (

  <div className=''>
      <BrowserRouter>
         {/* <Navbar1/> */}
        <Routes>
            {/* <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/pricing' element={<Pricing/>}></Route> */}

            <Route path='/usestate' element={<UseState/>}></Route>
            <Route path='/counter' element={<CounterPage/>}></Route>
            <Route path='/useeffect' element={<UseEffectPage/>}></Route>
            
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  </div>

  )
}

export default App
