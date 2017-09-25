import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';


const getRenderList = () =>{
    return(
        <ul>
            {events.map(item => {
                const date = new Date(item.date);
                if (date >= Date.now()) {
                  return (
                          <li key={item.name}>{item.name} <br/>
                            <strong>Data - {item.date}</strong> <br/>
                            Miejsce - {item.place}
                          </li>
                  );
              }
              return null;
            })}
        </ul>
    );
}

ReactDOM.render(getRenderList(), document.getElementById('root'));
