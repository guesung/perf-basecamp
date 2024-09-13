import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';
import Fallback from './components/Fallback/Fallback';

const Home = lazy(() => import('./pages/Home/Home'));
const Search = lazy(() => import('./pages/Search/Search'));

const App = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
