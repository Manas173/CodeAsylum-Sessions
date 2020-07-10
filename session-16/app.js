var n = "tourist"

fetch(`https://codeforces.com/api/user.info?handles=${n}`).then((res)=>{
    return res.json()
}).then((res2)=>{
    console.log(res2);
})