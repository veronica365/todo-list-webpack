import { generateTodos } from './modules/components.js';
import './css/styles.css';

document.querySelector('.todo-wrapper').innerHTML = generateTodos();
