let left = document.querySelector("#left")
let right = document.querySelector("#right")
let commentleft = document.querySelector("#commentleft")
let commentright = document.querySelector("#commentright")
let dist = 0
let slider = document.querySelector(".slider")
let pairs = document.getElementsByClassName("pair")
let modal = document.getElementById("modal")
let callMe = document.getElementById("callMe")
left.onclick = function (event) {
    event.preventDefault()
    // console.log("Силя:где дримирс?Я:нет.Силя:всмысли?Я:нету.Силя:тогда кууууууууусь.")
    dist=dist-100
    if(dist<0){
        dist=(slider.children.length-1)*100
    }
    slider.style.transform="translateX(-"+dist+"%)"
}
right.onclick = function(event) {
    event.preventDefault()
    // console.log("Силя:быстро за дримирсом в магазин.Я:щас 24:00.Силя:мне всеровно быстро за дримирсом.")
    dist=dist+100
    dist=dist%(slider.children.length*100)
    console.log(dist);
    slider.style.transform="translateX(-"+dist+"%)"
}
commentleft.onclick = function(event){
    event.preventDefault()
    let activePair = document.getElementsByClassName("activePair")[0];
    let prevPair; 
    if(activePair.previousElementSibling){
        prevPair = activePair.previousElementSibling
    }
    else{
        prevPair = pairs[pairs.length-1]
    }
    activePair.classList.remove("activePair");
    setTimeout(function(){
    prevPair.classList.add("activePair")
    },400)
}
commentright.onclick = function(){
    let activePair = document.getElementsByClassName("activePair")[0];
    let nextPair;
    if(activePair.nextElementSibling.classList[0]=="pair"){
       nextPair = activePair.nextElementSibling;
    }
    else{
        nextPair = pairs[0]
    }
    activePair.classList.remove("activePair");
    setTimeout(function(){
        nextPair.classList.add("activePair");
    },400);
}
callMe.onclick = function(){
    console.log("Силя любит есть")
    modal.style.transform="translateY(0) scale(1)"
}
modal.onclick = function(){
    modal.style.transform="translateY(100%) scale(0)"
}
modal.children[0].onclick = function(event){
    event.stopPropagation();
}