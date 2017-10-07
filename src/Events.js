import React from 'react';
import events from './data/events.json';
import EventItem from './EventsItem.js';
import EventFilter from './EventFilters.js';
import EventAdd from './EventAdd.js';




class Events extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          events: [],
          filter: '',
          newName: '',
          newPlace: '',
          newDate: '',
          newTime: ''
      };
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

    onNameChange(event){
        this.setState({
            newName: event.currentTarget.value
        });
    }

    onPlaceChange(event){
        this.setState({
            newPlace: event.currentTarget.value
        });
    }

    onDateChange(event){
        this.setState({
            newDate: event.currentTarget.value
        });
    }

    onTimeChange(event){
        this.setState({
            newTime: event.currentTarget.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        const{
            events,
            newName,
            newPlace,
            newDate,
            newTime
        } = this.state;

        const maxId = Math.max(...events.map(item => item.id));
        
        events.push({
            id: maxId + 1,
            name: newName,
            place: newPlace,
            date: newDate,
            time: newTime
        });

        this.setState({
            events
        });

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
            <EventAdd
                name={this.state.newName}
                place={this.state.newPlace}
                date={this.state.newDate}
                time={this.state.newTime}
                onNameChange={this.onNameChange.bind(this)}
                onPlaceChange={this.onPlaceChange.bind(this)}
                onDateChange={this.onDateChange.bind(this)}
                onTimeChange={this.onTimeChange.bind(this)}
                onFormSubmit={this.onFormSubmit.bind(this)}
            />
        </div>
    );

  }


}



export {Events};
