import { generateTodos } from "./modules/components";
import "./css/styles.css";

document.querySelector(".todo-wrapper").innerHTML = generateTodos();
