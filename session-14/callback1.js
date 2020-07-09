function x(a){
    console.log("Function x is called "+a);
}

function y(callback){
    console.log("Function y is called");
    var a = 10;
    callback(a);
}


y(x);

// We call a function when certain task is completed