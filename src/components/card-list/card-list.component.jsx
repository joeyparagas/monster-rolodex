// Create CardList component to be used in App.js
// This file takes care of importing the monster data from app.js
// It will then pass the data needed to style each card (card.component.jsx)
import React from 'react';
// import the css file
import './card-list.style.css';
import { Card } from '../card/card.component';


//// This method gets data component in app.js
// export const CardList = props => {
//   // console.log(props);  // this would output "Joey"
//   return <div className='card-list'>{props.children}</div>;
// }

// Instead the component should generate all the data 
// then app.js would just import it directly
export const CardList = props => (
  <div className='card-list'>
    {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
  </div>
);
