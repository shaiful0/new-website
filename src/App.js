import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashbord from './components/Dashbord/Dashbord';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <h1>welcome to my New website</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
