import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Mybooks';
import Navbar from './components/Navigation';
import Categories from './components/categories';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
