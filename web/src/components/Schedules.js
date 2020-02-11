import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../styles/form.css";
import ScheduleForm from "../forms/ScheduleForm";
import StyledHero from "../styles/StyledHero";

class Schedules extends Component {
  calendarComponentRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      calendarEvents: [{ title: "Available", start: new Date() }]
    };
  }

  render() {
    return (
      <StyledHero>
        <div className="calendar-container">
          <div className="calendar-top">
            <ScheduleForm />
          </div>
          <div className="calendar-body">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref={this.calendarComponentRef}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
              dateDoubleClick={this.updateClick}
            />
          </div>
          <div className={`message ${this.state.isError && "error"}`}>
            {this.state.isSubmitting ? "Submitting..." : this.state.message}
          </div>
        </div>
      </StyledHero>
    );
  }

  updateClick = (arg) => {
    window.confirm("Update your calendar" + arg.dateStr + " ?");
    this.setState({
      status: this.state.status.concat({
        title: "Booked",
        start: arg.date,
        from: arg.time,
        end: arg.time
      })
    });
  };
  handleDateClick = (arg) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({
          title: "Available",
          start: arg.date,
          from: arg.time,
          end: arg.time
        })
      });
    }
  };
}

export default Schedules;
