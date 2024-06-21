// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.js'
import Login from './pages/Login/Login.js'
import Signup from './pages/Login/Signup.js'
import ProtectedRoute from './pages/ProtectedRoute.js';
import PageLoading from './pages/PageLoading.js';
import Feed from './pages/Feed/Feed.js';
import Explore from './pages/Explore/Explore.js';
import Notifications from './pages/Notifications/Notifications.js';
import Messages from './pages/Messages/Messages.js';
import Booksmarks from './pages/Boookmarks/Booksmarks.js';
import Lists from './pages/Lists/List.js';
import Profile from './pages/Profile/Profile.js';
import More from './pages/More/More.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} >
                <Route index element={<Feed/>} />
            </Route>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}>
                <Route path='feed' element={<Feed/>}></Route>
                <Route path='explore' element={<Explore/>}></Route>
                <Route path='notifications' element={<Notifications/>}></Route>
                <Route path='messages' element={<Messages/>}></Route>
                <Route path='bookmarks' element={<Booksmarks/>}></Route>
                <Route path='lists' element={<Lists/>}></Route>
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='more' element={<More/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/page-loading' element={<PageLoading/>} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
