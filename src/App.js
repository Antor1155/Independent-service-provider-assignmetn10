import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

// document.body.style = 'background: #181717;';

function App() {
  return (
    <div className="App">
      <p className='top-text'>A place for perfect photographer</p>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
