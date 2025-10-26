import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Card from './page/Card'
import Header from './component/header'
import Footer from './component/footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
        </Routes>
        <Footer />
      </div>
    
 
     
    </>
  )
}

export default App
