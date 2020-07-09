function add(x,y){
    console.log(x+y);
}

function sub(x,y){
    console.log(x-y);
}

function mult(x,y){
    console.log(x*y);
}

function operation(callback,x,y){
    if(x%2 == 0)
        x = x + 1;
    if(y%2 == 0)
        y = y + 1;
        
    callback(x,y);
}

operation(sub,5,4);