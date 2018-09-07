import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const {events, deleteEvent} = this.props;
    return (
      <div>
        {events.map((event) => (
          // key is jsx to know where to start looking, event={event} we r parsing the event as eventlistItem component
          <EventListItem key={event.id} event={event} deleteEvent={deleteEvent}/>
        ))}
      

      </div>
    )
  }
}

export default EventList