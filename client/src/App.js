import "./App.css";
import Box from "@mui/material/Box";
// import components
import Header from "./components/header/Header";
import Home from "./components/Home";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import DetailView from "./components/itemDetails/DetailView";
import Cart from "./components/cart/CartIcon";
import AllProducts from "./components/Products";



function App() {
  return (
    <ContextProvider>
       <Header />
      <Box style={{ marginTop: "66px" }}>
       <Routes >
         <Route path='/' element ={<Home/>} />
         <Route path='/product/:id' element ={<DetailView/>} />
          <Route path='/products' element ={<AllProducts/>} />
          <Route path='/cart' element ={<Cart/>} />
       </Routes>
      </Box>
    </ContextProvider>
  );
}

export default App;
