import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";

import { deleteEvent } from "../eventActions";

// mapStateToProps is take state from the store and pass it to the component as props
const mapState = state => ({
  events: state.events
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
    // local state

    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // })
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
