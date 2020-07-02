function get_todos() 
{
    let todos = new Array();

    let todosString = localStorage.getItem('todos');


        if (todosString !== null) 
        {
            todos = JSON.parse(todosString);
        }
        return todos;
}


function add() {
        let todos = get_todos();
        let textBoxContent = document.getElementById('itemToAdd').value;

    todos.push(textBoxContent);

    localStorage.setItem("todos", JSON.stringify (todos));
  
}

function show(){
    let todos = get_todos();
    let html = '<ul>';

        for(let i = 0; i< todos.length; i++)  
        {
            html += '<li>' + todos[i] + '<button>Item</button></li>'; /* I want these buttons to remove each item*/
        }
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
}

show(); /* Add show here so I can see what changes are made on my page*/

document.getElementById('addTodo').addEventListener('click', add);

function removeTodo(){

    let todos = removeTodo();
    let i = this.id;

    let removeTodo = i.substring(10, i.length);

    todos.splice(removeTodo, 0);/* Don't really understand splice yet*/

    localStorage.setItem('todos',JSON.stringify(todos));
/* this just keeps adding new undefined items when webpage is refreshed*/
}
document.getElementById('removeTodo').addEventListener('click', add);



