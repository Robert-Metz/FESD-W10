

let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye!') {
        content.innerHTML = 'Hello!';
    }else if (content.innerHTML = '') {
        content.innerHTML = 'Hello!'
    }   
    else {
        content.innerHTML = 'Goodbye!'
    }
})

document.getElementById('remove').addEventListener('click', () => {
    content.innerHTML = '';
});


let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    row.insertCell(4).innerHTML = document.getElementById('author').value;
    row.insertCell(5).innerHTML = document.getElementById('worker').value;
    let actions = row.insertCell(6);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        
    };
    return btn;
}