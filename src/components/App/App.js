import "./App.css";
import CreateCard from "../CreateCard/CreateCard";
import { useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

//this is just to help create some cards.

function App() {
	const hardcodeCards = [
		{ week: 1, day: "Monday", topic: ["Loops", "arrays", "objects"] },
		{ week: 2, day: "Tuesday", topic: ["React", "Testing", "loops"] },
	];
	const [cards, setCards] = useState(hardcodeCards);

	return (
		<div>
			<CreateCard cards={cards} setCards={setCards} />
			<div className="cardDisplay"><DisplayCard cards={cards}></DisplayCard></div>
			
			{console.log(cards)}
		</div>
	);

}

export default App;

//plan:
//1.design object with data (for now)
//2.

/*
<div>
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
    </div>
      */
