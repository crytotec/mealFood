import shawarma from '../Images/shawarma.jpeg'
import hamburger from '../Images/hamburger.jpeg'
import friedrice from '../Images/friedrice.jpeg'
import chicken from '../Images/Fried Chicken With Rice.jpeg'
import donut from '../Images/donuts.jpeg'
import chow from '../Images/Chicken Chow Mein.jpeg'
import cheese from '../Images/Cheeseburger.jpeg'
import './Home.css'
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import {details, winterFood, dietaryFood}  from '../Items'

function Home(){

   const [slide, setSlide]=useState(0);
   const totalslide= [
      {id:1, img:hamburger},
      {id:2, img:friedrice },
      {id:3, img:cheese},
      {id:4, img:chicken},
      {id:5, img:chow},
      {id:6, img:donut}
   ]
   const set= Math.ceil(totalslide.length/3);

   const prevSlide = () =>{
      setSlide((slide - 1 + set) % set)
   }
   const nextslide = () =>[
      setSlide((slide + 1)%set)
   ]
 return(
    <div className='section'>
      <div className='section1'>
      <img className='image' src={shawarma}/>
      <div className='textbackground'>
      <h1>Plan Your Meals, Simplify Your Life</h1>
                    <p>Get started with our easy-to-use meal planning tool</p>
                    <button>
                        <a href=''>Start planning</a>
                    </button>      </div>
      </div>

      <div className='section2'>
      <h1 className=''>Deliciously Curated, just for you!</h1>
            <p>Plan Your Meal with Mealmaster</p>
      <div className='section2set'>
      {
         totalslide.slice(slide * 3,(slide + 1)* 3).map((total)=>
         <div key={total.id}>
            <img src={total.img}/>
         </div>)
       }
       <div className='icon'>
         <FaArrowAltCircleLeft className='iconset' onClick={prevSlide}/>
         <FaArrowAltCircleRight className='iconset' onClick={nextslide}/>
       </div>
      </div>
      </div>
      <h1 className='healthytext'>How MealMaster advises on how to eat healthy</h1>
       <div className='section3'>
         {
         details.map((items)=>
         (
         <div className='textbg' key={items.id}>
            <div className='text'>
          <p>{items.text}</p>
          </div>
         </div>
         )
      )
      }
       </div>
        
       <h1 className='healthytext'>Winter Food</h1>
       <div className='section3'>
       {winterFood.map((items)=>(
         <div key={items.id}>
            <div className='heathydes'>
               {items.name}
               {items.description}
            </div>
         </div>
       ))

       }
       </div>


       <h1 className='healthytext'>Deitary Food</h1>
       <div className='section4'>
       {dietaryFood.map((items)=>(
         <div key={items.id}>
            <div className='deitary'>
              <img className='img' src={items.img}/>
               {items.name}
            </div>
         </div>
       ))

       }
       </div>
       

      
    </div>
    
 )
}
export default Home