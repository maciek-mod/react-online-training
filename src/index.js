import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const element = (
  <div>
    {events.map(item => {
      return (
          <li key={item.name}>{item.name} <br/>
            <strong>{item.date}</strong> <br/>
            {item.place}
          </li>
      );
    })}
  </div>
);
// console.log(events);

ReactDOM.render(<ul>{element}</ul>, document.getElementById('root'));
