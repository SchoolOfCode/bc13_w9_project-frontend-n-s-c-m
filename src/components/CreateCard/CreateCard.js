import {useState} from "react"

function CreateCard ({cards, setCards}) {
    const [cardInput, setCardInput] = useState()
    function handleChangeWeek (e) {
        console.log(e.target.value)
        let weekInput = Number(e.target.value)
        setCardInput({...cardInput, week: weekInput})
    }
    function handleChangeDay (e) {
        console.log(e.target.value)
        let dayInput = (e.target.value)
        setCardInput({...cardInput, day: dayInput})
    }
    function handleChangeTopic (e) {
        console.log(e.target.value)
        let dayInput = (e.target.value)
        setCardInput({...cardInput, topic: [topicInput]})
    }

    return (
        <div>
            <input placeholder='Week No.' onChange={handleChangeWeek} type="number"></input>
            <input placeholder='Day' onChange={handleChangeDay} ></input>
            <input placeholder='Topic 1'></input>
            <input placeholder='Topic 2'></input>
            <input placeholder='Topic 3'></input>
            <img src=''/>
            <button>Click to save</button>

        </div>

    );
}

export default CreateCard; 