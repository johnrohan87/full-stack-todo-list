/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = async function() {
  console.log("Fetching your ToDo's!");
  let response = await fetch(
    "https://3000-a405fded-2476-4fdf-82b0-d7ef2a4722eb.ws-us02.gitpod.io/api/get"
  );
  let response_body = await response.json();
  this.console.log(response_body);

  let ToDoContainer = document.querySelector(".ToDoContainer");

  var output = "";
  for (var property in response_body) {
    output +=
      `<ul class="col-12" id="${property}">` +
      response_body[property] +
      `</ul>`;
  }
  ToDoContainer.innerHTML = output;

  var ToDoChildren = ToDoContainer.querySelectorAll("ul");
  ToDoChildren.forEach(addlistenerFunction);
  function addlistenerFunction(item, index) {
    item.addEventListener("click", listenerFunction, false);
  }
  function listenerFunction(item) {
    alert(item.target.id);
  }
};
