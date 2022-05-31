import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Heading } from "./Heading.jsx";
import { ToDosForm } from "./ToDosForm.jsx";
import { ToDos } from "./ToDos.jsx";
import { addToDoApi, getAllTasks } from "../toDoAPI.js";

const Home = () => {
	const [toDoList, addNewToDo] = useState([]);

	useEffect(() => {
		getAllTasks().then((data) => {
			addNewToDo(data);
		});
	}, [addNewToDo]);

	function addToDo(toDo) {
		addNewToDo(toDoList.concat(toDo));
		let currenntList = toDoList.concat(toDo);
		addToDoApi(currenntList);
		console.log(currenntList);
	}

	const deleteToDo = (index) => {
		const removeTodoList = toDoList.filter((toDo, idCounter) => {
			return index !== idCounter;
		});

		addToDoApi(removeTodoList);
		addNewToDo(removeTodoList);
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
