import React from "react";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from "shortid";
import Controller from "../controllers";
import CreateTodoForm from "../createTodoForm";
import ListView from "../listView";
import TableView from "../tableView";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "dfjskadf",
        title: "main todo text",
        description: "main todo descriptions",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "f554sdf4",
        title: "main todo text",
        description: "main todo descriptions",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm : false,
    searchTerm: '',
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos]
    const todo = todos.find(t => t.id === todoId)
    todo.isSelect = !todo.isSelect

    this.setState({todos})
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos]
    const todo = todos.find(t => t.id === todoId)
    todo.isComplete = !todo.isComplete

    this.setState({ todos })
  };

  toggleForm = () =>{
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm
    })
  }
  handleSearch = () => {}

  createTodo = (todo) => {
    todo.id = shortid.generate()
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;    
    const todos = [todo, ...this.state.todos]
    this.setState({ todos })
    this.toggleForm();
  }
  render() {
    return ( 
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller 
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        />
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
        <Modal
          isOpen={this.state.isOpenTodoForm}
          toggle={this.toggleForm}
        >
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
