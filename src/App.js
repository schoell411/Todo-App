import React from "react";
import "./App.css";

//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const data = [];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: data
		};
	}

	addTask = task => {
		const newTask = {
			task: task,
			id: Date.now(),
			completed: false
		};
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	toggleCompleted = id => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed
					};
				} else {
					return task;
				}
			})
		});
	};

	deleteCompleted = e => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.filter(task => {
				return !task.completed;
			})
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h1>My Todo List</h1>
					<button className="delete-button" onClick={this.deleteCompleted}>
						Delete Completed Tasks
					</button>
				</div>
				<div className="todo-form">
					<TodoForm addTask={this.addTask} />
				</div>
				<div className="todo-list">
					<TodoList
						tasks={this.state.tasks}
						toggleCompleted={this.toggleCompleted}
					/>
				</div>
			</div>
		);
	}
}

export default App;
