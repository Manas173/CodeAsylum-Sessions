var x = 4;
var y = 5;

function func(){
    x = Number(document.getElementById('ip1').value);
    y = Number(document.getElementById('ip2').value);
}

function add(){
    console.log(x+y);
}

add();
setTimeout(()=>{
    console.log("Timeout");
    add();
},5000);