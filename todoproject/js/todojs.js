function addToList() {

    const item = document.getElementById('inputBox').value;
    let taskList = getList();
    if (taskList !== null) {
        taskList.push(item);
    } else {
        taskList = [];
    }
    showList(taskList);
    setList(taskList);

}

function showList(taskList) {
    // create and append list items using taskList.forEach
    taskList.array.forEach(element => {
        const listItem = document.createElement(li);
        const eachItem = document.textContent();


        

    });
    // KATHY START HERE display items to screen
}

function getList() {
    return JSON.parse(localStorage.getItem('taskList'));
}

function setList(taskList) {
    //create array of items for local storage
    localStorage.setItem('taskList', JSON.stringify(taskList));


}
function addbun() {
    console.log('bunbun');
}