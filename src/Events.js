import React from 'react';
// import events from './data/events.json';
import fetch from "isomorphic-fetch";
import EventItem from './EventsItem.js';
import EventFilter from './EventFilters.js';
import EventAdd from './EventAdd.js';
import Loader from './common/Loader.js';

class Events extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          events: [],
          isLoading: true,
          filter: '',
          newName: '',
          newNameValid: false,
          newPlace: '',
          newPlaceValid: false,
          newDate: '',
          newDateValid: false,
          newTime: '',
          newTimeValid: false

      };
      this.onCleanList = this.onCleanList.bind(this);
      this.onShowAll = this.onShowAll.bind(this);

    }

    componentDidMount() {
            fetch('//frontendinsights.com/events.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    events: data,
                    isLoading: false
                });
            })
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
        fetch('//frontendinsights.com/events.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                events: data
            });
        })
    }
    onFilterChange(event){
        const value = event.currentTarget.value;
        this.setState({
            filter: value
        })
    }


    onFieldChange(field, event){
        const value = event.currentTarget.value;
        this.setState({
            [field]: value,
            [field + 'Valid']: value.length > 0
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        const{
            events,
            newName,
            newPlace,
            newDate,
            newTime,
            newNameValid,
            newPlaceValid,
            newDateValid,
            newTimeValid
        } = this.state;

        const maxId = Math.max(...events.map(item => item.id));

        events.push({
            id: maxId + 1,
            name: newName,
            place: newPlace,
            date: newDate,
            time: newTime,
        });
        if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
            this.setState({
                events
            });
        }
    }

  render() {

    return (
        <div>
            <EventFilter filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)} />

            <Loader isLoading={this.state.isLoading}>
                <ul>
                    {this.state.events.map(item => {
                        const date = new Date(item.date);
                        if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
                          return (<EventItem item={item} key={item.id} onDeleteItems={this.onDeleteItems.bind(this)} />);
                      }
                      return null;
                    })}

                </ul>
            </Loader>

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
                nameValid={this.state.newNameValid}
                placeValid={this.state.newPlaceValid}
                dateValid={this.state.newDateValid}
                timeValid={this.state.newTimeValid}
                onFieldChange={this.onFieldChange.bind(this)}
                onFormSubmit={this.onFormSubmit.bind(this)}
            />
        </div>
    );

  }


}



export {Events};
