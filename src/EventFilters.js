import React from 'react';
import PropTypes from 'prop-types';

const EventFilter = (props) => {
  return (
        // <li>
        //     <strong>{props.item.name}</strong>  <br/>
        //     Data - {props.item.date}<br/>
        //     Miejsce - {props.item.place} <br/>
        //     <button onClick={props.onDeleteItems.bind(this, props.item.id)}>Usuń</button>
        // </li>
        <form>
            <input type="text" placeholder="filtruj...." value={props.filter} onChange={props.onFilterChange}/>
        </form>
  );
};
EventFilter.PropTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default EventFilter;
