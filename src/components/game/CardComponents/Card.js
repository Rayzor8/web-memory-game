import React, { useContext } from 'react';
import './CardStyle.css';
import { cardGameContext } from '../../../context/cardGameContext';

const Card = ({ cards, flipped }) => {
   const { handleCardChoice,disableClick } = useContext(cardGameContext);
   // click event handler
   const handleClick = () => {
      if(!disableClick){
      handleCardChoice(cards);
      }
   };

   return (
      <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={cards.src} alt="card front" />
        <img className="back" src="/img/cover.jpg" onClick={handleClick} alt="cover" />
      </div>
    </div>
   );
};

export default Card;
