import './App.css';
import { Route, Routes } from 'react-router-dom';

import Books from './components/Mybooks';
import Navbar from './components/Navigation';
import Categories from './components/categories';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes className="routes">
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
