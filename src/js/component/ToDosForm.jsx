import React, { useState } from "react";

export const ToDosForm = (props) => {
	const [newToDo, setNewToDo] = useState("");

	const addToDo = (newToDo) => {
		let notifyNewTask = props.addNewToDo;
		notifyNewTask(newToDo);
		setNewToDo("");
	};

	return (
		<div className="box d-flex justify-content-center">
			<br></br>
			<br></br>
			<input
				className="form-control"
				type="text"
				onChange={(e) => setNewToDo(e.target.value)}
				value={newToDo}
				onKeyUp={(e) => {
					e.key === "Enter" ? addToDo(newToDo) : null;
				}}
				placeholder={props.placeholder}></input>
		</div>
	);
};
