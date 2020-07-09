var arr = [];

function func(){
    arr.splice(0,0,"Word1","Word2");
    setTimeout(()=>{
        console.log(arr);
    },1000);
}

function func3(){
    arr.splice(0,0,"NewWord1","NewWord2");
    setTimeout(()=>{
        console.log(arr);
    },1000);
}

function func2(callback){
    setTimeout(()=>{
        arr.push("Word3");
        callback();
    },2000);
    // callback
}

func2(func3);