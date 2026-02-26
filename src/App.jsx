
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
import FormDemo from './pages/FormDemo'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Todo from './pages/Todo'
import UseMemoDemo from './pages/UseMemoDemo'
import UseRefFocus from './pages/UseRefFocus'
import UseRef2 from './pages/UseRef2'


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
                
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/user/:id' element={<UserDetail/>}></Route>


            <Route path='/form' element={<FormDemo/>}></Route>
            <Route path='/todo' element={<Todo/>}></Route>

            <Route path='/usememopage' element={<UseMemoDemo/>}></Route>
            <Route path='/useref' element={<UseRefFocus/>}></Route>
            <Route path='/useref2' element={<UseRef2/>}></Route>

            
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  </div>

  )
}

export default App
