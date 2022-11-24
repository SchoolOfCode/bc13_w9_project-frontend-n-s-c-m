import "./App.css";
import CreateCard from "../CreateCard/CreateCard";
import { useEffect, useState } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

function App() {
	const [cards, setCards] = useState([]);

	//useEffect to fetch all the cards in the db

	useEffect(() => {
		async function getCards() {
			const response = await fetch("http://localhost:3500/api/cards");
			const data = await response.json();
			const newCards = data.payload;
			console.log(newCards);
			setCards([...newCards]);
		}
		getCards();
	}, []);

	return (
		<div>
		<div></div>
			<div className = "header">
				<div className = "createCardDiv">
					<CreateCard cards={cards} setCards={setCards}/>
					</div>
				<div className = "about">
				<h1 className="title">The hivemind</h1>
				<p>Here you can keep notes, references, and links related to your SoC schedule. </p>
        </div>
			</div>
			<div className="cardDisplay">
				{JSON.stringify(cards) !== "[]" ? (
					<>
						<DisplayCard cards={cards} setCards={setCards}></DisplayCard>
					</>
				) : (
					<></>
				)}
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

//  const hardcodeCards = [
// 	{
// 		week: 1,
// 		day: "Monday",
// 		image:
// 			"https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png",
// 		topic: ["Loops", "arrays", "objects"],
// 		references: [
// 			"https://arrays.com",
// 			"https://arrays.com",
// 			"https://arrays.com",
// 		],
// 	},
// 	{
// 		week: 2,
// 		day: "Tuesday",
// 		image:
// 			"https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png",
// 		topic: ["React", "Testing", "loops"],
// 		references: [
// 			"https://arrays.com",
// 			"https://arrays.com",
// 			"https://arrays.com",
// 		],
// 	},
// ];
