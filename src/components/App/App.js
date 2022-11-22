import './App.css';
import CreateCard from '../CreateCard/CreateCard';
import {useState} from "react"


function App() {
  const [cards,setCards] = useState([{}])

  return (
    <div>
    <CreateCard cards={cards} setCards={setCards}/>


    
    </div>
  );
}

export default App;

//plan:
//1.design object with data (for now)
//2.