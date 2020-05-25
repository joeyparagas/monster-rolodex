// Style each card accordingly and import images
import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    {/* Import images and use the id to import unique images */}
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
)