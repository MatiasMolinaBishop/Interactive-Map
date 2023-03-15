import NavBar from './components/NavBar';
import Home from './pages/Home';
import MapComponent from './pages/Map';
import Profile from './pages/Profile';

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

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onAdd={onAdd} />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/profile" element={<Profile submitted={submitted} count={count} />} />
      </Routes>
    </div>
  );
}

export default App;
