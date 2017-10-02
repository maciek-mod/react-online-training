import React from 'react';

const EventItem = (props) => {
  return (
        <li key={props.item.id}>
            <strong>{props.item.name}</strong>  <br/>
            Data - {props.item.date}<br/>
            Miejsce - {props.item.place} <br/>
            <button onClick={props.onDeleteItems.bind(this, props.item.id)}>Usuń</button>
        </li>
  );
};

export default EventItem;
