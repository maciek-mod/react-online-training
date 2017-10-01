import React from 'react';
import events from './data/events.json';

class Events extends React.Component {


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

    onDeleteItems(itemId, event) {
       event.preventDefault();
       const filterArray = this.state.events.filter(item => item.id !== itemId);
       this.setState({
           events: filterArray
       })
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
                                Miejsce - {item.place} <br/>
                                <button onClick={this.onDeleteItems.bind(this, item.id)}>Usuń</button>

                              </li>
                      );
                  }
                  return null;
                })}

            </ul>
            <button  onClick={this.onCleanList}>
                czyszczenie!!!
            </button>
        </div>
    );

  }


}



export {Events};
