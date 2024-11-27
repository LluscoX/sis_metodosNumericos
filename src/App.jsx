import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Carrousel from './Components/Carrousel'
import Navbar from './Components/Navbar'

import NewtonRaphsonCalculator from './Components/newtonRaohson/NewtonRaphsonCalculator';

import Jacobi from './Components/Jacobi/Jacobi'

import GaussSeidel from './Components/GaussSeidel/GaussSeidel';

import './source/css/style.css'
import GaussSORT from './Components/GaussSORT/GaussSORT';
import JacobiSORT from './Components/JacobiSORT/JacobiSORT.JSX';
import Info from './Components/Info/Info';

function App() {
  

  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Carrousel />} />
          <Route path="/newtonRaphon" element={<NewtonRaphsonCalculator/>} />
          <Route path="/jacobi" element={<Jacobi/>} />
          <Route path="/jacobiSORT" element={ <JacobiSORT/> } />
          <Route path="/gaussSeidel" element={<GaussSeidel/>} />
          <Route path="/gaussSeidelSORT" element={<GaussSORT/>} />
          <Route path="/informacion" element={<Info/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
