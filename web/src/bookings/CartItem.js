import React from "react";

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }
  render() {
    const { lesson } = this.props;
    return (
      <div style={{ marginBottom: "10px" }}>
        <div>
          <h4>{lesson.title}</h4>
          <h5>
            <small>price: </small>${lesson.cost}
          </h5>
          <span>
            <small>Quantity: </small>
            {lesson.qty}
          </span>
          <button onClick={() => this.props.remove(lesson)}>
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
