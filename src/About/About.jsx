import './about.css'


function About(){
   return(
    <div className='body'>
           <div className='about'>
           <div className='aboutorg'>
            <h1 className='header'>Our Mission</h1>
            <div className='aboutset'>
        <p>MealMaster is dedicated to helping people eat smarter, not harder. Our Mission
          is to provide personalized nutrition guidance, healthy recipes, and expert advice
          to support a balanced lifestyle.
        </p>
            </div>
            
            <h1 className='header'>Our Vision</h1>
            <div className='aboutset'>
       <p className=''>MealMaster envisions a future where individuals and communities
          thrive on balanced diets, fostering a culture of wellness, self-care, and environmental sustainability.
        </p>
        </div>
        
        <h1 className='header'>Our Values</h1>
        <div className='aboutset'>
            <p>
          <span className="span">Personalization:</span> We tailor our guidance to individuals
          needs, goals, and lifestyles.
        </p>
        <p>
          <span className="span">sustainability:</span> We promote environmentally friendly and socially
          responsible food choices.
        </p>
        <p>
          <span className='span'>community:</span> We foster a supportive and inclusive environment
          for users to share and learn.
        </p>
        </div>
       
        </div>

           </div>
            
    </div>
   )
}
export default About