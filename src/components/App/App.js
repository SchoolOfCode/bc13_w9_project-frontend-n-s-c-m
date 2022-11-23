import "./App.css";
import CreateCard from "../CreateCard/CreateCard";
import { useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

//this is just to help create some cards.

function App() {
	const hardcodeCards = [
		{ week: 1, day: "Monday", topic: ["Loops", "arrays", "objects"], references:["https://arrays.com","https://arrays.com", "https://arrays.com"]  },
		{ week: 2, day: "Tuesday", topic: ["React", "Testing", "loops"], references:["https://arrays.com","https://arrays.com", "https://arrays.com"] },
	];
	const [cards, setCards] = useState(hardcodeCards);

	return (
		<div>
			<CreateCard cards={cards} setCards={setCards} />
			<div className="cardDisplay">
				<DisplayCard cards={cards}></DisplayCard>
			</div>
			
			{console.log(cards)}
		</div>
	);

}

export default App;


/* <div>
    <CreateCard cards={cards} setCards={setCards}/>
    <div>
      {JSON.stringify(cards) != "[]" ?
      <>
      <p>{cards[0].week}</p>
      <p>{cards[0].day}</p>
      <p>{cards[0].topic[0]}</p>
      <p>{cards[0].topic[1]}</p>
      <p>{cards[0].topic[2]}</p>
      <p>{cards[0].references[0]}</p>
      <p>{cards[0].references[1]}</p>
      <p>{cards[0].references[2]}</p>
      </>
      :
      <> <p>Enter some data!</p></>
      }
    </div> */

