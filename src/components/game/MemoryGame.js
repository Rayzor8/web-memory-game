import { useEffect, useState } from 'react';
import { cardImages } from '../../data/CardData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { cardGameContext } from '../../context/cardGameContext';
import Card from './CardComponents/Card';
import './MemoryGame.css';
import { Link } from 'react-router-dom';

function MemoryGame() {
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(12);
   const [choiceOne, setChoiceOne] = useState(null);
   const [choiceTwo, setChoiceTwo] = useState(null);
   const [disableClick, setDisableClick] = useState(false);

   console.log({ numberOfTurn: turns });
   console.log({ cardCheatPosition: cards });
   useEffect(() => {
      Aos.init({ duration: 1500 });
   }, []);

   // function for handle onlick Newgame Button
   const suffleCards = () => {
      const randomCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));
      setCards(randomCards);
      //reset  turn to 0
      setTurns(12);
      setChoiceOne(null);
      setChoiceTwo(null);
   };

   useEffect(() => {
      suffleCards();
   }, []);

   // function calculating remaining turns

   const handleCardChoice = (card) => {
      // set who is the first choice and who is the second choice
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   };

   // useEffect handleChange of ChoiceOne and ChoiceTwo
   useEffect(() => {
      if (choiceOne && choiceTwo) {
         // set Disable click after both condition is true
         setDisableClick(true);
         if (choiceOne.src === choiceTwo.src) {
            setCards((prevCard) =>
               prevCard.map((card) =>
                  card.src === choiceOne.src ? { ...card, isMatch: true } : card
               )
            );
            nextTurn();
         } else {
            setTimeout(() => nextTurn(), 1000);
         }
      }
   }, [choiceOne, choiceTwo]);

   // reset turns and choice
   const nextTurn = () => {
      setTurns((prev) =>
         prev > 1 ? prev - 1 : <span className="gameover">GAME OVER !!</span>
      );
      setChoiceOne(null);
      setChoiceTwo(null);
      setDisableClick(false);
   };

   return (
      <cardGameContext.Provider value={{ handleCardChoice, disableClick }}>
         <div className="memory">
            <h1 className="memory-title" data-aos="fade-right">
               Match a Famous Soccer Player. <br />
               <span>Rayzor.dev</span>
            </h1>
            <div className="menu-button-container">
               <button onClick={suffleCards} className="button">Restart Game</button>
               <Link to="/" className="button">Logout</Link>
               
            </div>
            <h5 className="remain-turn">
               Remain turn :<span>{turns}</span>
            </h5>
            <div className="card-container" data-aos="fade-up">
               <div className="card-grid">
                  {cards.map((card) => (
                     <Card
                        key={card.id}
                        cards={card}
                        flipped={
                           card === choiceOne ||
                           card === choiceTwo ||
                           card.isMatch
                        }
                     />
                  ))}
               </div>
            </div>
         </div>
      </cardGameContext.Provider>
   );
}

export default MemoryGame;
