import './styles/app.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './constans'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path={`/${ROUTES.products}`} element={<Products />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
