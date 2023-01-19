import React from "react";

export const ToDos = (props) => {
	const toDoList = props.toDoList;

	const shownToDoList = toDoList.map((toDo, index) => {
		return (
			<li key={index}>
				{toDo.text}
				<span className="buttonRight">
					<button
						onClick={() => props.deleteToDo(toDo.id, index)}
						type="button"
						className="mouseOver btn-close ms-2"
					/>
				</span>
			</li>
		);
	});

	return <ul>{shownToDoList}</ul>;
};
