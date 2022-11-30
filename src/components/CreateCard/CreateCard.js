import { useState } from "react";
import "./CreateCard.css";

function CreateCard({ cards, setCards }) {
	const [cardInput, setCardInput] = useState({ image: "" });
	const [topic1, setTopic1] = useState("");
	const [topic2, setTopic2] = useState("");
	const [topic3, setTopic3] = useState("");
	const [reference1, setReference1] = useState("");
	const [reference2, setReference2] = useState("");
	const [reference3, setReference3] = useState("");

	function handleChangeWeek(e) {
		console.log(e.target.value);
		let weekInput = Number(e.target.value);
		setCardInput({ ...cardInput, week: weekInput });
	}
	function handleChangeDay(e) {
		console.log(e.target.value);
		let dayInput = e.target.value;
		setCardInput({ ...cardInput, day: dayInput });
	}

	function handleChange(e, setState) {
		console.log(e.target.value);
		let input = e.target.value;
		setState(input);
	}

	async function handleClick() {
		const topicsArray = [topic1, topic2, topic3];
		const referencesArray = [reference1, reference2, reference3];
		let newCard = { ...cardInput, topic: topicsArray, ref: referencesArray };
		const send = await fetch("http://localhost:3500/api/cards", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newCard),
		});

		console.log(cardInput);
		const thumbsUp = await send.json();
		console.log(thumbsUp);

		if (thumbsUp.success === true) {
			setCards([...cards, thumbsUp.payload]);
		}
	}
	function handleImage(e) {
		const imgInput = e.target.value;
		setCardInput({ ...cardInput, image: imgInput });
	}

	return (
		<div className="createCard">
			<h3>Enter resource details</h3>
			<input
				className="weekInput"
				placeholder="Week No."
				onChange={handleChangeWeek}
				type="number"
			></input>
			<input placeholder="Day" onChange={handleChangeDay}></input>
			<img src={cardInput.image} alt="logo here" height="auto" width="100px" />
			<input placeholder="Enter image URL" onChange={handleImage}></input>
			<input
				placeholder="Topic 1"
				onChange={(event) => handleChange(event, setTopic1)}
			></input>
			<input
				placeholder="Topic 2"
				onChange={(event) => handleChange(event, setTopic2)}
			></input>
			<input
				placeholder="Topic 3"
				onChange={(event) => handleChange(event, setTopic3)}
			></input>
			<input
				placeholder="Reference 1"
				onChange={(event) => handleChange(event, setReference1)}
			></input>
			<input
				placeholder="Reference 2"
				onChange={(event) => handleChange(event, setReference2)}
			></input>
			<input
				placeholder="Reference 3" className= 'perolito'
				onChange={(event) => handleChange(event, setReference3)}
			></input>
			<button className="addCardButton" onClick={handleClick}>
				Click to save
			</button>
		</div>
	);
}

export default CreateCard;
