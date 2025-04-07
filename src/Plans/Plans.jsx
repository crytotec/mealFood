import { Breakfast, Dinner, Lunch } from '../Item2';
import { useState } from 'react';
import './plan.css';

function Plans({ meal, setMeal }) {
  const [check, setCheck] = useState([]);
  const [category, setCategory] = useState('');
  const Food = [...Breakfast, ...Dinner, ...Lunch];

  const setSearch = (category) => {
    const lowercasecategory = category.toLowerCase();
    const filteredFood = Food.filter((item) => item.category.toLocaleLowerCase() === lowercasecategory);
   

     if(filteredFood.length > 0){
         setCheck(filteredFood)
     }else{
       setCheck([])
     }
  };

  const addFood = (prev) => {
    setMeal((prevMeal) => {
      const checkExist = meal.find((index) => index.id === prev.id);
      if (checkExist) {
        return prevMeal.map((item) =>
          item.id === prev.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevMeal, { ...prev, count: 1 }];
      }
    });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <form
          className=".form"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(category);
          }}
        >
          <label id="category">Category:</label>
          <input
            value={category}
            onChange={handleCategory}
            type="text"
            id="category"
            placeholder="Search by category"
          />
          <select value={category} onChange={handleCategory} id="category-select">
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <button onClick={() => setSearch(category)}>Enter</button>
        </form>
      </div>

      {/* Display filtered items (based on category) */}
      <div className="plans">
        {check.map((item, index) => (
          <div className="planset" key={`${item}-${index}`}>
            <img className="ima" src={item.img} alt={item.alt} />
            <h1>{item.name}</h1>
            <p>{item.category}</p>
            <button
              className="btn"
              onClick={() =>
                addFood({
                  id: item.id,
                  img: item.img,
                  name: item.name,
                  category: item.category,
                })
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Display breakfast items */}
      <h1 className="header">Breakfast Food</h1>
      <div className="plans">
        {Breakfast.map((index) => (
          <div className="planset" key={`Breakfast-${index.id}`}>
            <img className="ima" src={index.img} alt={index.alt} />
            <h1>{index.name}</h1>
            <p>{index.category}</p>
            <button
              className="btn"
              onClick={() =>
                addFood({
                  id: index.id,
                  img: index.img,
                  name: index.name,
                  category: index.category,
                })
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Display lunch items */}
      <h1 className="header">Lunch Food</h1>
      <div className="plans">
        {Lunch.map((index) => (
          <div className="planset" key={`Lunch-${index.id}`}>
            <img className="ima" src={index.img} alt={index.alt} />
            <h1>{index.name}</h1>
            <p>{index.category}</p>
            <button
              className="btn"
              onClick={() =>
                addFood({
                  id: index.id,
                  img: index.img,
                  name: index.name,
                  category: index.category,
                })
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Display dinner items */}
      <h1 className="header">Dinner Food</h1>
      <div className="plans">
        {Dinner.map((index) => (
          <div className="planset" key={`Dinner-${index.id}`}>
            <img className="ima" src={index.img} alt={index.alt} />
            <h1>{index.name}</h1>
            <p>{index.category}</p>
            <button
              className="btn"
              onClick={() =>
                addFood({
                  id: index.id,
                  img: index.img,
                  name: index.name,
                  category: index.category,
                })
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
