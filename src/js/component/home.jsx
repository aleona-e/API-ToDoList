import propTypes from "prop-types";
import React, { useState } from "react";
import { Heading } from "./Heading.jsx";
import { ToDosForm } from "./ToDosForm.jsx";
import { ToDos } from "./ToDos.jsx";

const Home = () => {
	const [toDoList, addNewToDo] = useState([]);

	const addToDo = (toDo) => {
		addNewToDo(toDoList.concat(toDo));
		console.log(toDoList);
	};

	const deleteToDo = (index) => {
		const removeTodo = toDoList.filter((toDo, idCounter) => {
			return index !== idCounter;
		});
		console.log(removeTodo);
		addNewToDo(removeTodo);
	};

	return (
		<div className="container">
			<br></br>
			<div className="card mx-auto">
				<div className="card-header">
					<Heading />
				</div>
				<div className="card-body">
					<ToDosForm
						placeholder={"What is missing to be done?"}
						addNewToDo={addToDo}
					/>
					<br></br>
					<br></br>
					<ToDos toDoList={toDoList} deleteToDo={deleteToDo} />
				</div>
			</div>
		</div>
	);
};

export default Home;
