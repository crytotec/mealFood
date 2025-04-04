import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import About from './About/About';
import Meals from './Meal/Meal';
import Plans from './Plans/Plans';
import Home from './Home/Home';
import Footer from './footer/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [meal, setMeal]=useState(() =>{
    const saved=localStorage.getItem('meal');
    return saved ? JSON.parse(saved):[]
})
useEffect(() =>{
  if(meal.length > 0){
    localStorage.setItem('meal', JSON.stringify(meal))
  }
}, [meal])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans"   element={<Plans meal={meal} setMeal={setMeal} />} />
        <Route path="/meals"  element={<Meals meal={meal} setMeal={setMeal}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;