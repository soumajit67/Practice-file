
const user = {
    username: "John Doe",
    email: "John@gmail.com"
}



function handleObject(obj){
    console.log(`username: ${obj.username}, email: ${obj.email}`);
}


handleObject(user);



handleObject({
    username: "Jane Doe",
    email: "Jane@gmail.com"
})



const newArr = [200, 400, 600, 100];
const arr = [1,2,3,4,5];


function retursecondvalue(arr){
    return arr[1];
}


console.log(retursecondvalue(newArr));
console.log(retursecondvalue(arr));
