import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../styles/calendar.css";

class Schedules extends Component {
  calendarComponentRef = React.createRef();
  constructor(props) {
    super(props);
    // this.renderSchedule = this.renderSchedule.bind(this);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [{ title: "Available", start: new Date() }],
      values: {
        title: ["Available", "Booked"],
        start: [],
        end: [],
        trainer_id: [],
        account_id: []
      },
      isSubmitting: false,
      isError: false
    };
  }

  // componentDidMount() {
  //   fetch("/api/schedules")
  //     .then((response) => response.json())
  //     .then((json) => this.setState({ values: json }));
  // }

  // renderSchedule = () => {
  //   Object.keys(this.state.values).map((obj, i) => {
  //     return (
  //       <div>
  //         {this.state.values[obj].title}
  //         {this.state.values[obj].start}
  //         {this.state.values[obj].end}
  //         {this.state.values[obj].trainer_id}
  //       </div>
  //     );
  //   });
  // };

  // addSchedule = () => {
  //   let calendarApi = this.calendarComponentRef.current.componentDidMount();
  //   calendarApi.addSchedule();
  // };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  submitForm = async (e) => {
    e.preventDefault(e);
    console.log(this.state);
    this.setState({ isSubmitting: true });
    // const url = "http://localhost:3001/api/schedules";
    const res = await fetch(`/api/schedules`, {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: {
            title: ["Available", "Booked"],
            start: [],
            end: [],
            trainer_id: [],
            account_id: []
          }
        }),
      1600
    );
  };

  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-top">
          <form className="form-box" onSubmit={this.submitForm}>
            <div>
              <label htmlFor="title">Status</label>
              <select
                type="title"
                name="title"
                id="title"
                value={this.state.values.title}
                onChange={this.handleInputChange}
                title="title"
                required
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
            <div>
              <label htmlFor="start">Start: </label>
              <input
                type="datetime-local"
                name="start"
                id="start"
                value={this.state.values.start}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="end">End: </label>
              <input
                type="datetime-local"
                name="end"
                id="end"
                value={this.state.values.end}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="trainer_id">Trainer ID</label>
              <input
                type="trainer_id"
                name="trainer_id"
                id="trainer_id"
                value={this.state.values.trainer_id}
                onChange={this.handleInputChange}
                title="trainer_id"
                required
              />
            </div>
            <div>
              <label htmlFor="account_id">Account Type</label>
              <input
                type="account_id"
                name="account_id"
                id="account_id"
                value={this.state.values.account_id}
                onChange={this.handleInputChange}
                title="account_id"
                required
              />
            </div>
            <button type="submit">Add Schedules</button>
          </form>
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
              weekends={this.state.calendarWeekends}
              events={this.state.calendarEvents}
              dateClick={this.handleDateClick}
            />
          </div>
          <div className={`message ${this.state.isError && "error"}`}>
            {this.state.isSubmitting ? "Submitting..." : this.state.message}
          </div>
        </div>
      </div>
    );
  }
  handleDateClick = (arg) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({
          title: "New Event",
          start: arg.date,
          from: arg.time,
          end: arg.time
        })
      });
    }
  };
}

export default Schedules;
