import React from 'react';
import events from './data/events.json';
import EventItem from './EventsItem.js';


class Events extends React.Component {

    constructor(props) {
      super(props);
      this.state = { events: []};
      this.onCleanList = this.onCleanList.bind(this);
      this.onShowAll = this.onShowAll.bind(this);

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

    onShowAll(event) {
        event.preventDefault();
        this.setState({
            events
        })
    }

  render() {

    return (
        <div>
            <ul>
                {this.state.events.map(item => {
                    const date = new Date(item.date);
                    if (date >= Date.now()) {
                      return (<EventItem item={item} key={item.id} onDeleteItems={this.onDeleteItems.bind(this)} />);
                  }
                  return null;
                })}

            </ul>
            <button onClick={this.onCleanList}>
                czyszczenie!!!
            </button> <br/><br/>
            <button onClick={this.onShowAll}>
                Show all
            </button>
        </div>
    );

  }


}



export {Events};
