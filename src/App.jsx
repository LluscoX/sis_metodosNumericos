import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Carrousel from './Components/Carrousel'
import Navbar from './Components/Navbar'

import NewtonRaphsonCalculator from './Components/newtonRaohson/NewtonRaphsonCalculator';

import Jacobi from './Components/Jacobi/Jacobi'

import GaussSeidel from './Components/GaussSeidel/GaussSeidel';

import './source/css/style.css'

function App() {
  
  function practica1 ()  {
      console.log('hola mundo')
  }

  return (
    <div>
      
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Carrousel />} />
          <Route path="/newtonRaphon" element={<NewtonRaphsonCalculator/>} />
          <Route path="/jacobi" element={<Jacobi/>} />
          <Route path="/gaussSeidel" element={<GaussSeidel/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
