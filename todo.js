const btnAjout = document.querySelector(".btn1");
// const btnTodo = document.querySelector('.btn2')
// const btnDoing = document.querySelector('.btn3')
// const btnDone = document.querySelector('.btn4')
const ListUl = document.querySelector(".list-group");
const listItem = document.querySelector(".listItem");
const InputValue = document.querySelector(".InputValue");


// console.log(ListinputValue);
effacerInput = () =>{
    InputValue.value =""
    InputValue.focus()
    
}

btnAjout.addEventListener("click", ajoutTache);

function ajoutTache() {
  let ListinputValue = InputValue.value;
  // console.log(ListinputValue);
  if (ListinputValue === "") {
    alert("le champs ne doit pas etre vide");
    return;
  }
  let divTodo = document.createElement("div");
  divTodo.classList.add("todo");

  let liList = document.createElement("li");
  liList.classList.add("list-group-item");
  liList.innerHTML = ListinputValue;

  var btnTodo = document.createElement("button");
  btnTodo.classList.add("btn2");
  btnTodo.innerHTML = "todo";
  btnTodo.addEventListener("click", (event) => chagebackground(event));
  var btndoing = document.createElement("button");
  btndoing.classList.add("btn3");
  btndoing.innerHTML = "doing";
  btndoing.addEventListener("click", (event) => chagebackgroundOrange(event));

  var btndone = document.createElement("button");
  btndone.classList.add("btn4");
  btndone.innerHTML = "Done";
  btndone.addEventListener("click", (event) => chagebackgroundGreen(event));

  listItem.appendChild(divTodo);
  divTodo.appendChild(liList);
  divTodo.appendChild(btnTodo);
  divTodo.appendChild(btndoing);
  divTodo.appendChild(btndone);
}

chagebackground = (event) => {
    const liList = event.target.parentNode.querySelector('.list-group-item');
    liList.style.background = "rgba(255, 0, 0, 0.26)";
};

chagebackgroundOrange = (event) => {
    const liList = event.target.parentNode.querySelector('.list-group-item');


    liList.style.background = "rgba(255, 68, 0, 0.477)";
};
chagebackgroundGreen = (event) => {
    const liList = event.target.parentNode.querySelector('.list-group-item');

    liList.style.background = "rgba(0, 128, 0, 0.503)";
};
