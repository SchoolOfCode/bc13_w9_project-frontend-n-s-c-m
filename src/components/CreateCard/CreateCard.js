/*
    {
        week: 1
        day: "Monday"
        topic: ["Something", Soemthing2, something3] 
        references: ["ref1,"etc"]
    }
*/

/*Martha's made a change*/

import { useState } from "react";

function CreateCard({ cards, setCards }) {
	const [cardInput, setCardInput] = useState();
	const [topic1, setTopic1] = useState("");
	const [topic2, setTopic2] = useState("");
	const [topic3, setTopic3] = useState("");

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
    function handleClick() {
        const topicsArray = [topic1, topic2, topic3];
        //setCardInput({...cardInput,topic: { topicsArray }})
        let newCard = {...cardInput, topic: topicsArray}
        setCards([...cards,newCard])
        console.log(cardInput)


    }

	return (
		<div>
			<input
				placeholder="Week No."
				onChange={handleChangeWeek}
				type="number"
			></input>
			<input placeholder="Day" onChange={handleChangeDay}></input>
			<input placeholder="Topic 1" onChange={handleChangeTopic1}></input>
			<input placeholder="Topic 2" onChange={handleChangeTopic2}></input>
			<input placeholder="Topic 3" onChange={handleChangeTopic3}></input>
			<img src="" />
			<button onClick={handleClick} >Click to save</button>
		</div>
	);
}

export default CreateCard;
