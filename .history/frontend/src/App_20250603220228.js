import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Book } from './Pages/Book';
import { Hire } from './Pages/Hire';
import { Contact } from './Pages/Contact';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer} from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Book/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/hire' element={<Hire/>}/>
       
          <Route path='/login' element={<LoginSignup/>}/> 
          </Routes>
          <Carousel/>
         <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
