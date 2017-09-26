import React from 'react';

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
  render() {
      
    return <ul className="first">
        {this.props.events.map(item => {
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

  }
}


export {Events};
