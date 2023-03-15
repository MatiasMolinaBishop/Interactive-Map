import NavBar from './components/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Mapa from './pages/Mapa';

import { useState } from "react"

import { Routes, Route } from "react-router-dom";

function App() {

  const [submitted, setSubmitted] = useState([])

  const [count, setCount] = useState(0)

  const onAdd = (obj) => {
    setCount(1)
    setSubmitted(prevState => {
      return [...prevState, obj]
    })
  }

  const onDelete = (company) => {
    console.log('WHAT THAT FUCK')
    const newArr = submitted.filter((location) => {
      return location.company !== company
    })
    setSubmitted(newArr)
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onAdd={onAdd} />} />
        <Route path="/map" element={<Mapa />} />
        <Route path="/profile" element={<Profile submitted={submitted} count={count} onDelete={onDelete} />} />
      </Routes>
    </div>
  );
}

export default App;
