import React from 'react';

const getEvents = (events) => {
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
};

export {getEvents};
