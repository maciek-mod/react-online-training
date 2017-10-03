import React from 'react';
import events from './data/events.json';
import EventItem from './EventsItem.js';
import EventFilter from './EventFilters.js';



class Events extends React.Component {

    constructor(props) {
      super(props);
      this.state = { events: [], filter: ''};
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
    onFilterChange(event){
        const value = event.currentTarget.value;
        this.setState({
            filter: value
        })
    }

  render() {

    return (
        <div>
            <EventFilter filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)} />
            <ul>
                {this.state.events.map(item => {
                    const date = new Date(item.date);
                    if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
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
