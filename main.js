//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//fetch("https://api.openweathermap.org/data/3.0/onecall?lat=44.34&lon=10.98&exclude={part}&appid=783b22606a8e290199504a23f3476a10")

let first = document.querySelector(".first");
let last = document.querySelector(".last");
let title = document.querySelector(".title");
let foto = document.querySelector(".foto"); 


fetch("https://randomuser.me/api")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    //console.log(data.results[0]);
    //console.log(data.results[0].name.first);
first.innerHTML= `<h2>Имя : ${data.results[0].name.first}</h2>`;


    //console.log(data.results[0].name.last);
last.innerHTML= `<h2>Фамилия : ${data.results[0].name.last}</h2>`;


    //console.log(data.results[0].name.title);
title.innerHTML= `<h2> Кто это? : ${data.results[0].name.title}</h2>`;

 //console.log(data.results[0].picture.large);
foto.innerHTML= `<img src=${data.results[0].picture.large} />`;
})


// })
// fetch("https://randomuser.me/api")
// .then(function(resp){
//     return resp.json();
// })
// .then(function(data){
//     console.log(data.results[0].email,data.results[0].dob.age )
//     console.log(data.results[0].dob.age)
