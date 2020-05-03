import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = ()=>{
  const APP_ID= 'a26b65e7';
  const APP_KEY= '63f14b35ca863356bdc0614a07b4c4ad';

  const [recipes,setRecipes] = useState([]); 
  const [search,setSearch] = useState(''); 
  const [query,setquery] = useState('chicken'); 
  
  useEffect(()=>{
    getRecipe();
  },[query]);
  
  const getRecipe = async ()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
  }

  const updateChange = e=>{
    setSearch(e.target.value);
  }

  const updateQuery = e =>{
    e.preventDefault();
    setquery(search);
    setSearch('');
  }
  return(
    <div className="App">
     <form  onSubmit={updateQuery} className="search-form">
       <input className="search-bar" type ="text" value={search} onChange={updateChange}/>
         <button className="search-button" type="submit">
           Search
         </button> 
         <div>
            {
              recipes.map(recipe =>(
                  <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calories = {recipe.recipe.calories} 
                    image = {recipe.recipe.image}
                    ingredients ={recipe.recipe.ingredients}
                  />
                ))
            }  
         </div> 
     </form>
    </div>
  );
};

export default App;
