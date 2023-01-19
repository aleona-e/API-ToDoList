import React, { useState, useEffect } from "react";
import { Heading } from "./Heading.jsx";
import { ToDosForm } from "./ToDosForm.jsx";
import { ToDos } from "./ToDos.jsx";
import { addToDoApi, getAllTasks, deleteToDoApi } from "../toDoAPI.js";

const Home = () => {
	const [toDoList, setTodoList] = useState([]);
	const [shouldFetch, setShouldFetch] = useState(true);

	useEffect(() => {
		if (shouldFetch) {
			getAllTasks().then((data) => {
				setTodoList([...data]);
				setShouldFetch(false);
			});
		}
	}, [shouldFetch]);

	const addToDo = (toDo) => {
		let currentList = toDoList.concat(toDo);
		setTodoList(currentList);
		addToDoApi(toDo).then(() => {
			setShouldFetch(true);
		});
	};

	const deleteToDo = (id, index) => {
		deleteToDoApi(id);
		const removeTodoList = toDoList.filter((toDo, idCounter) => {
			return index !== idCounter;
		});
		setTodoList(removeTodoList);
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
