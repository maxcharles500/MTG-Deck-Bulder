import React from 'react'
import Card from './Card'

function Home({cards, addSpells}) {
    

    console.log('cardz' , cards)
    const mappedCards = () => {
        return cards.map(card => {
            
             
             return <Card card={card} key={card} addSpells={addSpells}/>
        })
    }

  
    return (
        <div>
            
            <h1>Cards...</h1>
            <h1>{mappedCards()}</h1> 
        </div>
    )
}

export default Home
