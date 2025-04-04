import {Breakfast, Dinner, Lunch} from '../Item2'
import './plan.css'
function Plans({meal, setMeal}){
 
  const addFood = (prev) =>{
   setMeal((prevMeal)=>
    {
    const checkExist=meal.find((index)=> index.id === prev.id);
    if(checkExist){
      return prevMeal.map((item)=>item.id===prev.id?
      {...item, count:item.count + 1}: item)}
    else{
      return [...prevMeal, {...prev, count: 1}]
    }
   })
  }
    return(
    <div>
          <h1 className='header'>Breakfast Food</h1>
         <div className='plans'>
            {    
                Breakfast.map((index)=>(
                    <div className='planset' key={`Breakfast-${index.id}`}>
                        <img className='ima' src={index.img} alt={index.alt}/>
                        <h1>{index.name}</h1>
                        <p>{index.category}</p>
                        <button className='btn' onClick={() =>addFood({id:index.id, img:index.img,name:index.name, category:index.category})}>{index.Add}</button>
                    </div>
                ))
            }
          </div>
          <h1 className='header'>Lunch Food</h1>
          <div className='plans'>
         {
          Lunch.map((index)=>(
            <div className='planset' key={`Lunch-${index.id}`}>
                        <img className='ima' src={index.img} alt={index.alt}/>
                        <h1>{index.name}</h1>
                        <p>{index.category}</p>
                        <button className='btn' onClick={() =>addFood({id:index.id, img:index.img, category:index.category})}>{index.Add}</button>
                    </div>
          ))
         }
         </div>

         <h1 className='header'>Dinner Food</h1>
          <div className='plans'>
         {
          Dinner.map((index)=>(
            <div className='planset' key={`Dinner-${index.id}`}>
                        <img className='ima' src={index.img} alt={index.alt}/>
                        <h1>{index.name}</h1>
                        <p>{index.category}</p>
                        <button className='btn' onClick={() =>addFood({id:index.id, img:index.img, category:index.category})}>{index.Add}</button>
                    </div>
          ))
         }
         </div>
    </div>
  )
}
export default Plans