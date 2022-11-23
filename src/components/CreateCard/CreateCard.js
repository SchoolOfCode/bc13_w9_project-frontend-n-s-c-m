/*
    {
        week: 1
        day: "Monday"
        topic: ["Something", Soemthing2, something3] 
        references: ["ref1,"etc"]
    }
*/

import { useState } from "react";
import "./CreateCard.css";

function CreateCard({ cards, setCards }) {
	const [cardInput, setCardInput] = useState({image: ""});
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
	function handleChangeTopic1(e) {
		console.log(e.target.value);
		let topicInput = e.target.value;
		setTopic1(topicInput);
	}
	function handleChangeTopic2(e) {
		console.log(e.target.value);
		let topicInput = e.target.value;
		setTopic2(topicInput);
	}
	function handleChangeTopic3(e) {
		console.log(e.target.value);
		let topicInput = e.target.value;
		setTopic3(topicInput);
	}
	function handleChangeReference1(e) {
        console.log(e.target.value);
        let referenceInput = e.target.value;
        setReference1(referenceInput);
    }
    function handleChangeReference2(e) {
        console.log(e.target.value);
        let referenceInput = e.target.value;
        setReference2(referenceInput);
    }
    function handleChangeReference3(e) {
        console.log(e.target.value);
        let referenceInput = e.target.value;
        setReference3(referenceInput);
	}
    function handleClick() {
        const topicsArray = [topic1, topic2, topic3];
		const referencesArray = [reference1, reference2, reference3];
        //setCardInput({...cardInput,topic: { topicsArray }})
        let newCard = {...cardInput, topic: topicsArray, references: referencesArray}
        setCards([...cards,newCard])
        console.log(cardInput)
    }
	function handleImage(e){
		const imgInput = e.target.value
		setCardInput({ ...cardInput, image: imgInput});

	}

	return (
		<div className = "createCard">
			<h3>Enter resource details</h3>
			<input
				placeholder="Week No."
				onChange={handleChangeWeek}
				type="number"
			></input>
			<input placeholder="Day" onChange={handleChangeDay}></input>
			<img src={cardInput.image} alt="logo here" height="auto" width="100px"/>
			<input placeholder="Enter image URL" onChange={handleImage}></input>
			<input placeholder="Topic 1" onChange={handleChangeTopic1}></input>
			<input placeholder="Topic 2" onChange={handleChangeTopic2}></input>
			<input placeholder="Topic 3" onChange={handleChangeTopic3}></input>
			<input placeholder="Reference 1" onChange={handleChangeReference1}></input>
			<input placeholder="Reference 2" onChange={handleChangeReference2}></input>
            <input placeholder="Reference 3" onChange={handleChangeReference3}></input>
			<button className="button" onClick={handleClick} >Click to save</button>

		</div>
		);
}

export default CreateCard;
