import './App.css';
import {Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import Invoice from './components/Invoice';
import Header from './components/Header';
import Post from './components/Post'
import Info from './components/Info';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/invoice' element={<Invoice />}>
          <Route index element={<Info />} />
          <Route path=':post' element={<Post />} />
        </Route>
        <Route 
        path='*'
        element={
          <div className="page">
            <h2>Page not found! <br></br>Error 404</h2>
          </div>
        }/>
      </Route>
    </Routes>
  );
}

export default App;
