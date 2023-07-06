import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/todos" element={<Todos />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;