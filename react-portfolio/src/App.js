import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Jumbotron from "./pages/home/Jumbotron";
import Carousel from "./pages/home/Carousel";
import Portfolio from "./pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';




const App = () => (
  <div className="container">
  
    <Header />
    
    <Jumbotron />
    <Carousel />

    

    <Footer />
  </div>
);

export default App;
