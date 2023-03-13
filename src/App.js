import NavBar from './components/NavBar';
import Home from './pages/Home';
import Map from './pages/Map';
import Profile from './pages/Profile';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Form />} /> */}
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
