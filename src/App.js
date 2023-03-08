import logo from "./logo.svg";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Home/Shared/Footer";
import Products from "./pages/Products/Products";


function App() {
  return (
    <div className="">
 
 
      <Routes>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='products' element={<Products/>}></Route>
      </Routes>



      <Footer/>
    </div>
  );
}

export default App;
