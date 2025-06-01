
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Book } from './Pages/Book';
import { Contact } from './Pages/Contact';
import { LoginSignup } from './Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Book/>}/>
          <Route path='/contact' element={<Contact/>}/>
       
          <Route path='/login' element={<LoginSignup/>}/> 
          </Routes>
         <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
