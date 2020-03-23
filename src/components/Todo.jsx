import React from "react";

const Todo = props => {
	return (
		<div className="task">
			<p className={props.task.completed ? "completed" : ""}>
				{props.task.task.toUpperCase()}
			</p>
			<button
				onClick={() => props.toggleCompleted(props.task.id)}
				className="todo-button"
			>
				{!props.task.completed ? "complete" : "undo"}
			</button>
		</div>
	);
};

export default Todo;
