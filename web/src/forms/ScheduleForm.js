import React, { Component } from "react";
import "../styles/calendar.css";
import "../styles/form.css";

class ScheduleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        title: [],
        start: [],
        end: [],
        trainer_id: [],
        account_id: []
      },
      isSubmitting: false,
      isError: false
    };
  }

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  submitForm = async (e) => {
    e.preventDefault(e);
    console.log(this.state);
    this.setState({ isSubmitting: true });
    const res = await fetch(`/schedules`, {
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
            title: "",
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
    const label = {
      display: "inline",
      margin: "5px",
      padding: "5px",
      fontSize: "16px"
    };

    const select = {
      margin: "5px",
      padding: "5px",
      height: "35px",
      fontSize: "14px"
    };

    const inputBox = {
      margin: "5px",
      padding: "5px",
      width: "200px",
      height: "20px",
      borderRadius: "5px",
      fontSize: "14px"
    };

    const button = {
      margin: "5px",
      padding: "5px",
      height: "35px",
      width: "120px",
      textAlign: "center",
      display: "inline",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "14px"
    };

    return (
      <div>
        <form className="form-box" onSubmit={this.submitForm}>
          <div>
            <label style={label} htmlFor="title">
              Status
            </label>
            <select
              type="title"
              name="title"
              id="title"
              value={this.state.values.title}
              onChange={this.handleInputChange}
              title="title"
              required
              style={select}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
          <div>
            <label style={label} htmlFor="start">
              Start:
            </label>
            <input
              type="datetime-local"
              name="start"
              id="start"
              value={this.state.values.start}
              onChange={this.handleInputChange}
              required
              style={inputBox}
            />
          </div>
          <div>
            <label style={label} htmlFor="end">
              End:
            </label>
            <input
              type="datetime-local"
              name="end"
              id="end"
              value={this.state.values.end}
              onChange={this.handleInputChange}
              required
              style={inputBox}
            />
          </div>
          <div>
            <label style={label} htmlFor="trainer_id">
              Trainer ID
            </label>
            <select
              type="trainer_id"
              name="trainer_id"
              id="trainer_id"
              value={this.state.values.trainer_id}
              onChange={this.handleInputChange}
              title="trainer_id"
              required
              style={select}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <label style={label} htmlFor="account_id">
              Account Type
            </label>
            <select
              type="account_id"
              name="account_id"
              id="account_id"
              value={this.state.values.account_id}
              onChange={this.handleInputChange}
              title="account_id"
              required
              style={select}
            >
              <option value="1">Trainer</option>
              <option value="2">Client</option>
            </select>
          </div>
          <button style={button} type="submit">
            Add Schedule
          </button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

export default ScheduleForm;
