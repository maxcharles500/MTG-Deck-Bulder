import React from 'react'
import Card from './Card'
function Collection({spells, addSpells}) {

    const mappedSpells = () => {
        return spells.map(card => {
            
             
             return <Card card={card} key={card} addSpells={addSpells}/>
        })
    }


    return (
        <div>
            
            Collection Of Cards...
            {mappedSpells()}
        </div>
    )
}

export default Collection
