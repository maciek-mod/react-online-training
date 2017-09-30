import React from 'react';
import PropTypes from 'prop-types';

// const Events = (props) => {
//     return(
//         <ul className="first">
//             {props.events.map(item => {
//                 const date = new Date(item.date);
//                 if (date >= Date.now()) {
//                   return (
//                           <li key={item.name}>{item.name} <br/>
//                             <strong>Data - {item.date}</strong> <br/>
//                             Miejsce - {item.place}
//                           </li>
//                   );
//               }
//               return null;
//             })}
//         </ul>
//     );
// }


class Events extends React.Component {
    static propTypes = {
       events: PropTypes.array.isRequired
    };

  render() {

    return (
        <ul>
            {this.props.events.map(item => {
                const date = new Date(item.date);
                if (date >= Date.now()) {
                  return (
                          <li key={item.id}>
                          <strong>{item.name}</strong>  <br/>
                            Data - {item.date}<br/>
                            Miejsce - {item.place}
                          </li>
                  );
              }
              return null;
            })}
        </ul>
    );

  }

}



export {Events};
