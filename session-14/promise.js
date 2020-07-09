function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function mult(x,y){
    return x*y;
}

var promise = new Promise((resolve,reject)=>{
    resolve(3);
})

setTimeout(()=>{
    console.log("Timeout");
},0);

promise.then((res)=>{
    setTimeout(()=>{
        console.log("Timeout 2");
    },0);
    return add(res,5);
})
.catch((e)=>{
    console.log("Error after add function !!! : "+e);
    return Promise.reject("All operations aborted !!!");
})
.then((res2)=>{
    return sub(res2,7);
})
.then((res3)=>{
    return mult(res3,8);
})
.then((res)=>{
    setTimeout(()=>{
        console.log("Timeout 4");
    },0);
    console.log(res);
    setTimeout(()=>{
        console.log("Timeout 5");
    },0);
})
.catch((e)=>{
    console.log("Error !!! : "+e);
})

setTimeout(()=>{
    console.log("Timeout 3");
},0);