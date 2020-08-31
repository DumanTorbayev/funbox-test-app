import React from 'react';
import FoodCard from "./components/FoodCard";
import {foods} from "./data";

const App = () => {
    return (
        <div className='container'>
            <h1 className='title'>Ты сегодня покормил кота?</h1>

            <div className='food-card-container'>
                {foods.nyamushka.map( data => <FoodCard key={data.id} {...data} /> )}
            </div>
        </div>
    );
}

export default App;
