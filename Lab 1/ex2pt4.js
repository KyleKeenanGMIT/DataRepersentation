const ages = [25, 31, 42, 77]; //array of ages

let partD = ages.map((item) => {
    if (item < 70) {
        return item * 2; //if item is less than 70, item is multiplied by 2
    } else
        return item; 

})

console.log(partD); // prints partD variable to console.