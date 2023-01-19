export const getAllTasks = () => {
	return fetch(
		"https://3000-4geeksacade-flaskresthe-xu8r2w4x9dn.ws-eu83.gitpod.io/todo",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((resp) => {
			return resp.json();
		})
		.catch((error) => {
			//error handling
			console.log(error);
		});
};

export const addToDoApi = (newToDo) => {
	return fetch(
		"https://3000-4geeksacade-flaskresthe-xu8r2w4x9dn.ws-eu83.gitpod.io/todo",
		{
			method: "POST",
			body: JSON.stringify(newToDo),
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((resp) => {
			return resp.json();
		})
		.catch((error) => {
			console.log(error);
		});
};
export const deleteToDoApi = (toDoId) => {
	fetch(
		"https://3000-4geeksacade-flaskresthe-xu8r2w4x9dn.ws-eu83.gitpod.io/todo/" +
			toDoId,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {})
		.catch((error) => {
			console.log(error);
		});
};
