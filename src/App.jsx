import  React,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import CartDetails from './Components/CartDetails';
import { Routes,Route} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-380'>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<CartDetails />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
