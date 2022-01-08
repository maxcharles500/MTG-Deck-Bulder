
import './App.css';
import Home from './Components/Home'
import Collection from './Components/Collection'
import {useEffect, useState} from 'react'


function App() {
  const cardUrl = 'https://api.magicthegathering.io/v1/cards'
  const [cards, setCards] = useState([])
  console.log('caaads' , cards)

  useEffect(() =>{
    getCards()
  
},[])
 

const getCards = () => {
    fetch(cardUrl).then(resp => resp.json()).then(data => {
      console.log('card data' , data)
      setCards(data.cards)
    })
  }
  return (
    <div className="App">
     
      
      <header className="App-header">
      <h1>Card Deck App</h1>
      
      <Home cards={cards} setCards={setCards} />
      
      <Collection />
      </header>
    </div>
  );
}

export default App;
