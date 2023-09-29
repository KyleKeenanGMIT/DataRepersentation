let myTasks = [];

let addTasks=(task) => {
let length = myTasks.push(task);
console.log("Item" + task + "has been added to Tasks");
return length;
}

let listAllTasks = ()=>{
    myTasks.forEach((item)=>{
console.log(item);
    
});
}

addTasks("Learn JS!");
listAllTasks();


 deleteTask=()=>{
     let index = myTasks.indexOf(task);
     myTasks.splice(index,1);
 }


