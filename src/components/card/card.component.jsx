import React from 'react';

import './card.styles.css';
export const Card = (props) => 

{

console.log(props.cardmonster.id)

return <div className='card-container'>
    
       <img src={`https://robohash.org/${props.cardmonster.id}?set=set2&size=180x180`} alt="cardmonster" />
       <h1>{props.cardmonster.id}{props.cardmonster.name}</h1>
       </div> ;

}