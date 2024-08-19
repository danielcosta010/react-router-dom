import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Admin from 'components/Admin';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='/sobre' element={<Sobre />} /> 
          </Route>
          <Route path='/admin/:user' element={<Admin />} />
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
