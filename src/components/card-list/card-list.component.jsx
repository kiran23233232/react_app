import React from 'react';
import './card-list.styles.css';


import {Card} from '../card/card.component';

// export const CardList = (props) =>
// {
//     console.log(props)
//     return (<div>{props.children}</div>)
// }


export const CardList = props =>
{
    console.log(props)
    

    // TYPE 1 : here we are having children to be rendered defined in apps.js file 
    // return <div className='card-list'> {props.children} </div>;

    // TYPE 2 : here we are not fetching children from app.js , here we are setting up the children directly 
    console.log(props.wulfa)
    // return <div className='card-list'>
    //         {props.wulfa.map(monster => <h1 key={monster.id}>{monster.email}</h1>)}
    //         </div>;

    // TYPE 3 : introducing Card Component 
    
    return <div className='card-list'>
{props.wulfa.map(monster => <Card key={monster.id} cardmonster={monster}/>)}
</div>;

}

