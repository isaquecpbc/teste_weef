import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import ListProduct from './components/ListProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Teste Weef</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/product/create">Create Product</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route index element={<ListProduct />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
