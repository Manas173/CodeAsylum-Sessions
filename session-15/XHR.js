var http = new XMLHttpRequest();


http.onreadystatechange = function (){
        console.log(http);
}

http.open('GET','https://codeforces.com/api/user.info?handles=tourist',false);
http.send();