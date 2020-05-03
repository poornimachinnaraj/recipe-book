import React from 'react';

const Recipe = ({title, calories, image,ingredients})=>{
    return(
        <div>
            <h1>{title}</h1>
            Ingredient:
                {ingredients.map(ingredient =>(
                  <p>
                       {ingredient.text} 
                  </p>              
                ))}
            
            <p>Calroies:{calories}</p>
            <img src={image} alt=""/>
        </div>    
    );
}
export default Recipe;