import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const {events} = this.props;
    return (
      <div>
        <h1>Event List</h1>

        {events.map((event) => (
          // key is jsx to know where to start looking, event={event} we r parsing the event as eventlistItem component
          <EventListItem key={event.id} event={event}/>
        ))}
        

      </div>
    )
  }
}

export default EventList