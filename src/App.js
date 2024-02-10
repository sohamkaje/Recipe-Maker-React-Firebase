import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Datacollection from './pages/datacollection/Datacollection';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='create-new-account' element={<Signup />} />
        <Route path='data-collection' element={<Datacollection />} />
        <Route path='recipe' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
