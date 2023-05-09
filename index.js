import UI from './ui.js';
import Task from './task.js';

const ui = new UI();
document.querySelector('.AddTaskBtn').addEventListener('click', e => {
    const taskTitle=document.querySelector('#newtaskID').value;
    if (taskTitle.length>0) {
        const task = new Task(taskTitle);
        ui.addToUI(task);
        ui.resetForm();
        console.log(task);  
    }
    
});