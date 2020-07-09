function add(x,y,callback){
    return callback(true,x+y);
}

function sub(x,y,callback){
    return callback(true,x-y);
}

function mult(x,y,callback){
    return callback(false,x*y);
}

add(3,4,function(error,res){
    if(!error){
        sub(res,2,function(error2,res2){
            if(!error2){
                mult(res2,10,function(error3,res3){
                    if(!error3){
                        console.log(res3);
                    }
                })
            }
        })
    }
})