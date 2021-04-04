const toDoForm = document.querySelector(".js-toDoForm"),
	  toDoInput = toDoForm.querySelector("input"),
	  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'todos';

let toDos = [];
let idNumbers = 1;
 
function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtm = document.createElement("button");
	const span = document.createElement("span");
	const newId = idNumbers;
	idNumbers +=1;
	
	delBtm.innerText = "X";
	delBtm.addEventListener("click", deleteToDo);
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtm);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id : newId
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value="";
}

function sonething(toDo){
	console.log(toDo.text);
}
function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	} 
}


function init () {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();