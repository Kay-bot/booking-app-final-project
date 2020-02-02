import React, { Component } from "react";
import "../styles/form.css";
import StyledHero from "../styles/StyledHero";
import TextareaAutosize from "react-textarea-autosize";

class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        image: "",
        title: "",
        duration: [],
        cost: [],
        category: "",
        language: ["Thai", "Espanal", "Greek", "English"],
        level: ["Beginner", "Intermediate", "Advance"],
        description: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch(`http://localhost:3001/lessons`, {
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
            image: "",
            title: "",
            duration: [],
            cost: [],
            category: "",
            language: ["Thai", "Espanal", "Greek", "English"],
            level: ["Beginner", "Intermediate", "Advance"],
            description: ""
          }
        }),
      1600
    );
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
  render() {
    return (
      <StyledHero>
        <div className="form-container">
          <h1>Add New Lession</h1>
          <form onSubmit={this.submitForm}>
            <div className="input-group">
              <label htmlFor="image">Image</label>
              <input
                className="input-box"
                placeholder="image url"
                type="url"
                name="image"
                id="image"
                value={this.state.values.image}
                onChange={this.handleInputChange}
                title="Image"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="title">Title</label>
              <input
                className="input-box"
                type="title"
                name="title"
                id="title"
                value={this.state.values.title}
                onChange={this.handleInputChange}
                title="Title"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="duration">Duration</label>
              <input
                className="input-box"
                type="duration"
                name="duration"
                id="duration"
                value={this.state.values.duration}
                onChange={this.handleInputChange}
                title="Duration"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="cost">Cost</label>
              <input
                className="input-box"
                type="cost"
                name="cost"
                id="cost"
                value={this.state.values.cost}
                onChange={this.handleInputChange}
                title="Cost"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <input
                className="input-box"
                type="category"
                name="category"
                id="category"
                value={this.state.values.category}
                onChange={this.handleInputChange}
                title="Category"
              />
            </div>
            <div className="input-group">
              <label htmlFor="language">Language</label>
              <select
                type="language"
                name="language"
                id="language"
                value={this.state.values.language}
                onChange={this.handleInputChange}
                title="Language"
                required
                className="select-box"
              >
                <option value="Thai">Thai</option>
                <option value="Espanol">Espanol</option>
                <option value="Greek">Greek</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="level">Level</label>
              <select
                type="level"
                name="level"
                id="level"
                value={this.state.values.level}
                onChange={this.handleInputChange}
                title="Level"
                required
                className="select-box"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <TextareaAutosize
                className="input-box"
                minRows={4}
                style={{ maxHeight: 300 }}
                placeholder="Add description..."
                type="description"
                name="description"
                id="description"
                value={this.state.values.description}
                onChange={this.handleInputChange}
                title="Description"
                required
              />
            </div>
            <button className="submit-btn-2" type="submit">
              Add Lesson
            </button>
          </form>
          <div className={`message ${this.state.isError && "error"}`}>
            {this.state.isSubmitting ? "Submitting..." : this.state.message}
          </div>
        </div>
      </StyledHero>
    );
  }
}

export default LessonForm;
