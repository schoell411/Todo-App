import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTask: ""
		};
	}

	handleChanges = e => {
		this.setState({
			newTask: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state.newTask);
		this.setState({
			newTask: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="todo">New Task:</label>
				<input
					type="text"
					name="todo"
					onChange={this.handleChanges}
					value={this.state.newTask}
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default TodoForm;
