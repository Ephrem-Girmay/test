import './App.css';
import { Navbar, Footer } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import { Login, Product, Products, Register, About } from './pages';
import Home from './pages/Home';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
