import './App.css'
import CreateComp from './components/CreateComp';
import Homecomp from './components/HomeComp'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homecomp />} />
        <Route path="/create" element={<CreateComp />} />
      </Routes>
    </>
  )
}

export default App
