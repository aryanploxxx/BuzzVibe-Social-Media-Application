// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Signup from './pages/Login/Signup.js'
import ProtectedRoute from './pages/ProtectedRoute.js';
import PageLoading from './pages/PageLoading.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/page-loading' element={<PageLoading/>} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
