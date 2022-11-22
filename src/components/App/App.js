import './App.css';
import CreateCard from '../CreateCard/CreateCard';
import {useState} from "react"


function App() {
  const [cards,setCards] = useState([])

  return (
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
    


    
    </div>
  );
}

export default App;

//plan:
//1.design object with data (for now)
//2.