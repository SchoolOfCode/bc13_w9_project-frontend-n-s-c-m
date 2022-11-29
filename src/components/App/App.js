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
			<div className="header">
				<div className="createCardDiv">
					<CreateCard cards={cards} setCards={setCards} />
				</div>
				<div className="about">
					<h1 className="title">Hivemind</h1>
					<p>
						Here you can keep notes, references, and links related to your SoC
						schedule.{" "}
					</p>
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
