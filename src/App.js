import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Learn from './Components/Learn';
import Scarousel from './Components/Scarousel';
import Form from './Components/Form';
import Contact from './Components/Contact';
import Visit from './Components/Visit';
import { Services } from './Components/Services';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Carousel></Carousel>
      <Card1></Card1>
      <Services></Services>
      <Learn></Learn>
      <Scarousel></Scarousel>
      <Form></Form>
      <Contact></Contact>
      <Visit></Visit>
    </div>
  );
}

export default App;
