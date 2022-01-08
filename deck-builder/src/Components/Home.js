import React from 'react'
import Card from './Card'
function Home({cards}) {

    console.log('cardz' , cards)
    const mappedCards = () => {
        return cards.map(card => {
            
             console.log(card)
             return <Card card={card} key={card.id} />
        })
    }

    return (
        <div>
            <h1>{mappedCards()}</h1> 
        </div>
    )
}

export default Home
