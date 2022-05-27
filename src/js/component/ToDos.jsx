import React, { useState } from "react";

export const ToDos = (props) => {
	const toDoList = props.toDoList;

	const shownToDoList = toDoList.map((newToDo, index) => {
		return (
			<li key={index}>
				{newToDo}
				<span className="buttonRight">
					<button
						onClick={() => props.deleteToDo(index)}
						type="button"
						className="btn-close"
					/>
				</span>
			</li>
		);
	});

	return <ul>{shownToDoList}</ul>;
};
