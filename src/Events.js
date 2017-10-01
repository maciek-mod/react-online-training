import React from 'react';
import events from './data/events.json';

// import PropTypes from 'prop-types';

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
    // static propTypes = {
    //    events: PropTypes.array.isRequired
    // };

    constructor(props) {
      super(props);
      this.state = { events: []};
      this.onCleanList = this.onCleanList.bind(this);
    }

    componentDidMount() {
        this.setState({
            events
        });
    }

    onCleanList(event) {
       event.preventDefault();
       this.setState({
           events: []
       });
    }

  render() {

    return (
        <div>
            <ul>
                {this.state.events.map(item => {
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
            <button href="/" onClick={this.onCleanList}>
                czyszczenie!!!
            </button>
        </div>
    );

  }


}



export {Events};
