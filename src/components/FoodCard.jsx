import React, {useState} from 'react';
import BuyButton from "./BuyButton";

const FoodCard = ({disabled, foodName, ingredient, servingsCount, giftCount, weight}) => {
    const [selected, setSelected] = useState(false);
    const [leave, setLeave] = useState(true)

    const compare = giftCount === null ? 'мышь' :
        giftCount > 1 && giftCount <= 4 ? 'мыши' :
            giftCount <= 5 ? 'мышей' : '';

    return (
        <div className={`card-wrapper ${selected ? 'selected' : disabled ? 'disabled' : ''}`}>
            <div className='card' onClick={() => setSelected(!selected)} onMouseEnter={() => setLeave(true)}
                 onMouseLeave={() => setLeave(false)} >
                <p className={`card__head-text ${leave && selected ? 'leave' : ''}`}>
                    {leave && selected ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
                </p>
                <h2 className='card__title'>{foodName}</h2>
                <p className='card__ingredient-text'>с {ingredient.name}</p>
                <p className='card__second-text'>{servingsCount} порций</p>
                <p className='card__second-text'>{giftCount} {compare} в подарок</p>
                <div className='card__badge'>
                    <span className='number'>{weight}</span>
                    <span className='text'>кг</span>
                </div>
                <svg className="card__background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 324 484" width="0" height="0" preserveAspectRatio="none">
                    <path fillRule="evenodd" strokeWidth="4"
                          d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z"/>
                </svg>
            </div>

            <p className='card-description'>
                {selected
                    ? ingredient.description :
                    disabled ? ingredient.notFound : <BuyButton setSelected={setSelected}/>
                }
            </p>
        </div>
    );
};

export default FoodCard;
