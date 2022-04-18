import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import Nothing from './Pages/Nothing/Nothing';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Utilities/RequireAuth';

document.body.style = 'background: #d9f2ff;';

function App() {
  return (
    <div className="App">
      <p className='top-text'>A place for perfect photographer</p>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Nothing></Nothing>}></Route>
      </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
