let myTasks = [];

let addTasks=(task) => {
let length = myTasks.push(task);
console.log("Item" + task + "has been added to Tasks");
return length;
}

let listAllTasks = ()=>{
    myTasks.length;
}


