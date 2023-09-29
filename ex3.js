let myTasks = [];//my array

let addTasks=(task) => {//arrow func
let length = myTasks.push(task);
console.log("Item" + task + "has been added to Tasks");
return length;//adding item to tasks var
}

let listAllTasks = ()=>{
    myTasks.forEach((item)=>{
console.log(item);//lists all tasks i nthe array
    
});
}

let deleteTask = (task)=>{//delete task method removing
   let index = myTasks.indexOf(task);
   if(index > -1){
   myTasks.splice(index, 1);
   console.log("item" + task + "has been removed");
   }else{
   console.log("item" + task + "was not found in tasks"); // returns this if index unable to find task.
   }
   return myTasks.length;//returns the length of mytasks

}


addTasks("Learn JS!");
addTasks("Learn React!");
listAllTasks();
deleteTask("Learn Js!")


 

