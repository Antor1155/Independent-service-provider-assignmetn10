import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/HomePage/Home/Home';
import Nothing from './Pages/Nothing/Nothing';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

document.body.style = 'background: #d9f2ff;';

function App() {
  return (
    <div className="App">
      <p className='top-text'>A place for perfect photographer</p>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>

        {/* <Route path='/home' element={<Login></Login>}></Route> */}
        <Route path='*' element={<Nothing></Nothing>}></Route>
      </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
