import React, { useEffect, useState } from "react";



const Home = () => {
	const [todoList, setTodoList] = useState([]);

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
									setTodoList([...todoList, e.target.value]);
									e.target.value = "";
								}}}/></li>
							{ todoList.map((todo, index)=>{
									return (<div key={index} className="row alert border">
												<p className="col-8">{todo}</p>
												<p className="offset-2 col-2" onClick={()=>{
													setTodoList(todoList.filter((e, i)=> i != index));
												 
												}}><i class="far fa-times-circle"></i></p>
											</div>)
								})}	
								<div className="row p-3 border"> {todoList.length >0 ? `${todoList.length} todos left` : "No todos left"} </div>
						</div>
				</div>
			</div>
				
		</div>
	);
};

export default Home;
