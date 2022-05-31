export const getAllTasks = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/aleona", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			//console.log(resp.text()); // will try return the exact result as string
			return resp.json();
		})
		.catch((error) => {
			//error handling
			console.log(error);
		});
};

export const addToDoApi = (toDoList) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/aleona", {
		method: "PUT",
		body: JSON.stringify(toDoList),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json();
		})
		.then((data) => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch((error) => {
			console.log(error);
		});
};
