import React, {Component} from 'react'
import {Grid, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'
import { createEvent, deleteEvent, updateEvent } from '../eventActions'

// mapStateToProps is take state from the store and pass it to the component as
const mapState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}



class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  }

  handleFormOpen = () => {
    this.setState({selectedEvent: null, isOpen: true});
  };

  handleCancel = () => {
    this.setState({isOpen: false});
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png';
    // const updatedEvents = [
    //   ...this.state.events,
    //   newEvent
    // ];

    this.props.createEvent(newEvent);
    this.setState({
      // local state

      //events: updatedEvents,
       isOpen: false});
  };

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
    this.setState({
      // localState

      // events: this.state.events.map(event => {
      //   if (event.id === updatedEvent.id) {
      //     return Object.assign({}, updatedEvent);
      //   }else{
      //     return event
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    })
  }

  // we need data input from this method that's why we are using arrow function
  // inside of arrow function
  handleOpenEvent = (eventToOpen) => () => {
    this.setState(
      {
        selectedEvent: eventToOpen,
        isOpen: true
       })
  }

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
    // local state

    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // })
  }

  render() {
    const {selectedEvent} = this.state;
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events}/>
        </Grid.Column>
        <Grid.Column width ={6}>
          <Button onClick={this.handleFormOpen} positive content='Create Event'/> 
          {this.state.isOpen && <EventForm
            updatedEvent={this.handleUpdateEvent}
            selectedEvent={selectedEvent}
            createEvent={this.handleCreateEvent}
            handleCancel={this.handleCancel}/>}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(EventDashboard);