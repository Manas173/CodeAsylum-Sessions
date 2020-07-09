var arr = [1,2,3];
console.log(arr);
arr.push(11);
console.log(arr);
arr.unshift(12);
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2,0,13,14,15,13,14,15,13);
console.log(arr);
arr = [1,2,3,21,5,6,7,8,9,10,11,12,15,18];
// console.log(arr.indexOf(13,9));
// console.log(arr.lastIndexOf(13,1));
// console.log(arr.length);

// arr.forEach(function func(a,index){
//     if(index%2 == 0)
//         console.log(a);
// })

console.log(arr);

var arr1 = arr.map(function func(a,index){
    if(a%3==0)
        return index;
})

console.log(arr1);
























function func3(a){
    console.log(a);
}




var abc = function(b123){
    b123(15);
}


abc(function func4(a){
    console.log("Printed "+a);
});









var arr = [{
    city : "Bangalore", country : "India"
},{
    city : "Delhi", country : "India"
},{
    city : "Chennai", country : "India"
},{
    city : "xyz", country : "Others"
},{
    city : "xyz", country : "Others"
},{
    city : "xyz", country : "Others"
}]


var arr4 = arr.filter(function func(a){
    if(a.country == "India")
        return true;
    return false;
})


var arr5 = arr4.map(function func(a){
    return a.city;
})

console.log(arr5);

console.log(arr);

//JSON -> JavaScript Object Notation






var arr2 = arr1.filter(function func(a){
    if(a == undefined)
        return false;

    return true;
})

console.log(arr2);

/*

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

*/

arr = [1,2,3,4,5,11,13,14,15,21,23,25,0,9];
console.log(arr);

arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);

arr.sort(function func(a,b){
    if(a<b)
        return true;
});
console.log(arr);

arr.unshift("Hello world");
console.log(arr);