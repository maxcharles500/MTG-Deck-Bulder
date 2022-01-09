import React, {useState} from 'react'


function Card({card, addSpells}) {
    

    const handleAddSpells = (e) => {
        console.log(card)
        addSpells(card)
    }
   
    return (
        <div>
             <li className="card" >    
             <p >{card}</p>
             <button onClick={handleAddSpells}style={{color: "black", textDecoration: 'none', fontSize: '1rem'}}>Add To Collection</button>
             {/* <img src={card.imageUrl} alt='image load failed'/>
                <p style={{ textDecoration: 'none', fontSize: '1rem'}}>name:{card.name}</p>
                <p style={{ textDecoration: 'none', fontSize: '1rem'}}>Colors:{card.colors}</p>
                <p style={{ textDecoration: 'none', fontSize: '1rem'}}>manacost:{card.manaCost}</p>
                <p style={{ textDecoration: 'none', fontSize: '1rem'}}>{card.power}/{card.toughness}</p>
                <p style={{ textDecoration: 'none', fontSize: '1rem'}}>type: {card.type}</p>
                 <button style={{color: "black", textDecoration: 'none', fontSize: '1rem'}}>Add to Collection</button> */}
             </li>
        </div>
    )
}

export default Card
