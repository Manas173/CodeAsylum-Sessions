fetch('https://codeforces.com/api/user.info?handles=tourist12312').then((res)=>{
    if(res.status != 200)
        return Promise.reject("All operations aborted!!!")
    return res.json();
}).then(()=>{
    return fetch('https://codeforces.com/api/user.info?handles=pratsy')
}).then((res3)=>{
    console.log(res3);
    return res3.json();
}).then((res4)=>{
    console.log(res4);
}).catch((e)=>{
    console.log("Error: "+e);
})