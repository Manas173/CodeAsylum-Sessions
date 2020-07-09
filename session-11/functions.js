var sen = "Hello world"

var obj = {
    sen: "Hey there",
    func1 : function(){
        console.log(this.sen);
    },
    func2 : () => {
        console.log(this.sen);
    }
}


var obj2 = {
    sen: "Obj2 it is",
    func2 : obj.func1,
    func3 : obj.func2
}

// obj2.func2();
// obj.func1();
// obj.func2();
// obj2.func3();
var abc = 1;
var xyz = setInterval(()=>{
    console.log(abc);
    abc = abc +1 ;
},3000);

console.log("Next statement");
console.log("Next statement 2");

setTimeout(()=>{
    clearInterval(xyz);
},9000);