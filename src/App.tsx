import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home/Home'));
const Search = lazy(() => import('./pages/Search/Search'));

import './App.css';
import { lazy, Suspense } from 'react';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>로딩 중</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<div>로딩 중</div>}>
                <Search />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
