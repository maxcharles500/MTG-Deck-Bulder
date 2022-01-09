
import './App.css';
import Home from './Components/Home'
import Collection from './Components/Collection'
import {useEffect, useState} from 'react'
import SearchBar from './Components/SearchBar'
import {Routes, Route} from "react-router-dom";

function App() {
  const cardUrl = 'https://api.scryfall.com/catalog/card-names'
  const [cards, setCards] = useState([])
  const [spells, setSpells] = useState([])
  const [search, setSearch] = useState('')

  
  console.log('collection' ,spells )

  useEffect(() =>{
    getCards()
  
},[])

const getCards = () => {
    fetch(cardUrl).then(resp => resp.json()).then(data => {
      console.log('card data' , data)
      setCards(data.data)
    })
  }

  const filteredCards = () => {
    return cards.filter(card=> {
        return card.toLowerCase().includes(search.toLowerCase())
    })
}


const addSpells = (card) => {
  //Check if card is already in spells
  //Take in card and add to spells state/component
  
  if (!spells.includes(card)) {
    setSpells([...spells, card])
    
  }
}
  return (
    <div className="App">
     
      
      <header className="App-header">

      <SearchBar setSearch={setSearch}/>
      
      
      <Home cards={!!search ? filteredCards() : cards} setCards={setCards} addSpells={addSpells}/>
      
      <Collection spells={spells} addSpells={addSpells}/>
      </header>
    </div>
  );
}

export default App;

{/* <Routes> 
        
<Route 
path='/'
element={code ? <Search code={code} /> : <LandingPage />} />

<Route 
path='/homepage' 
element={<Search />}
/>
</Routes> */}