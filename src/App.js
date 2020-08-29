import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import Courses from './components/Courses/Course';
import Footer from './components/Footer/Footer';



function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Courses></Courses>
      <Footer></Footer>
    
      
    </div>
  );
}







export default App;