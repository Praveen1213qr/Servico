import NavBar from "./Component/NavBar";
import CardTab from "./Component/CardTab";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
    
      
      <BrowserRouter> 
      <NavBar />
       
      
        <Routes>
          <Route path="/" element={<CardTab />} />
          
         
          <Route path="/signup" element = {<SignUp />} />

          <Route path="/login" element = {<Login />} />  

          <Route path="/aboutus" element = {<AboutUs/>} />

        </Routes>

        {/* <CardTab /> */}

         <Footer/>
      
      </BrowserRouter> 

     
      
      
     

      

    </>
  )
}

export default App
