import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // handleIncrement = (habit) => {
  //   this.props.onIncrement(habit);
  // };

  // handleDecrement = (habit) => {
  //   this.props.onDecrement(habit);
  // };

  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
            //Habit이라는 prop이름에 각각의 habit에 데이터를 전달
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
