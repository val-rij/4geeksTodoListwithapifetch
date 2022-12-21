import React, { useEffect, useState } from "react";



const Home = () => {
	const [todoList, setTodoList] = useState([]);
	useEffect(()=>{
		getTodos();
	},[])

	const getTodos = async() => {
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/valrij");
		const data = await response.json();
		setTodoList(data);
	}

	const updateTodos = async(listUpdated) => {
		const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/valrij", {
			method:"PUT", 
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(listUpdated)
		});

		if(response.ok){
			getTodos()
			
		}
	}

	return (
		<div className="mt-5">
			<div className="container">
				<h1> My ToDos </h1>
				<div className="row">
						<div className="col-4 mx-auto">
							<li><input 
							className= "text-center" 
							placeholder="Add toDo"
							onKeyUp={(e)=>{
								if(e.key == "Enter" && e.target.value.trim() != ""){
									updateTodos([...todoList, {done: false, label: e.target.value}])
									e.target.value = "";
								}}}/></li>
							{ todoList.map((todo, index)=>{
									if(todo.label != "sample task") {return (<div key={index} className="row alert border">
												<p className="col-8">{todo.label}</p>
												<p className="offset-2 col-2" onClick={()=>{
													updateTodos(todoList.filter((e, i)=> i != index));
												 
												}}><i class="far fa-times-circle"></i></p>
											</div>)}
								})}	
								<div className="row p-3 border"> {todoList.length >1 ? `${todoList.length-1} todos left` : "No todos left"} </div>
						</div>
				</div>
			</div>
				
		</div>
	);
};

export default Home;
