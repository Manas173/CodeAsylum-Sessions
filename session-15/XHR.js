var http = new XMLHttpRequest();
console.log(http);

http.onreadystatechange = function(){
    console.log(http);
}

http.open('GET','https://codeforces.com/api/user.info?handles=TLE',true);
http.send();