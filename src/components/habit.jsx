import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
    //컴포넌트가 UI상에 등록이 되었을때, 사용자에게 보여질때 호출
  }
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
    // 지우기 전에 호출
  }
  handleIncrement = () => {
    //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
    //this.setState({ count: this.state.count + 1 }); //꼭 리액트에서는 setState를 사용해서 업데이트해줘야함
    this.props.onIncrement(this.props.habit);
  };

  handleDecreament = () => {
    // const count = this.state.count -1;
    // this.setState({count:count < 0 ? 0 : count})
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    //console.log(this.props.habit)
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
