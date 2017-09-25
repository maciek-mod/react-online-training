import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';


const element = (
  <div>
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
    </div>
);
console.log(Date.now());

ReactDOM.render(<ul>{element}</ul>, document.getElementById('root'));
