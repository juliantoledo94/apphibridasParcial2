
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Juego } from './pages'

function App() {
  

  return (
    <>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/" element={<Juego />} />
      </Routes>
    </>
  )
}

export default App
