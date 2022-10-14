import React from "react";
import ListView from "../listView";
import TableView from "../tableView";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "dfjskadf",
        text: "main todo text",
        description: "main todo descriptions",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "f554sdf4",
        text: "main todo text",
        description: "main todo descriptions",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };

  toggleSelect = (todoId) => {};

  toggleComplete = (todoId) => {};
  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
