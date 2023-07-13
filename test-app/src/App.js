import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ListProduct from './components/ListProduct';

function App() {
  return (
    <div className="App">
      <h5>Teste Weef Dev FullStack PHP+React</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Pruducts</Link>
            </li>
            <li>
              <Link to="product/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListProduct />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
