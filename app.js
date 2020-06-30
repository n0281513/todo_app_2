function get_todos() 
{
    var todos = new Array();

    var todosString = localStorage.getItem('todos');


        if (todosString !== null) 
        {
            todos = JSON.parse(todosString);
        }
        return todos;
}


function add() {
        var todos = get_todos();
        var textBoxContent = document.getElementById('itemToAdd').value;

    todos.push(textBoxContent);

    localStorage.setItem("todos", JSON.stringify (todos));
  
    show();
}

function show(){
    var todos = get_todos();
    var html = '<ul>';

        for(var i = 0; i< todos.length; i++)  
        {
            html += '<li>' + todos[i] + '<button>Item</button></li>';
        }
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;
}

show();

function remove(){
    

}


document.getElementById('addTodo').addEventListener('click', add);


/*
Challenge: Figure out how to delete an item!
***Notes on deleting to todo items***
1. you need a unique id for each item 
2. you need a delete button that can be accessed individually in JS
3. you can use the id for each item to give its button a unique id
4. you can grab the id for the todo that is to be deletes using JS
5. remember, you can create HTML using the string - including ids
6. to remove an element from an array. use the fuction slice()
7. buttons will need event listners. those are to be created at the time you dynamically creat the buttons
*/