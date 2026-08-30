// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(btn);

// let para = document.querySelector("p");
// console.log(para);

// para.setAttribute("class", "newContent"); //overrides

//solution => classList.add

// para.classList.add("newContent");

//event

// let click = document.querySelector(".click");
// console.log(click);

// click.onclick = () => {
//     console.log("btn clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// click.onclick = () => {//override's
//     console.log("btn clicked 2");
// }

// let naz = document.querySelector(".nazmul");
// console.log(naz);

// naz.onmouseover = () => {
//     console.log("you are in div");
// }

// let click = document.querySelector(".click");

// const handleClick = () => {
//     alert("OOOps it's clicked!");
// }


// // click.addEventListener("click", handleClick);

// click.addEventListener('click', function(event) {
//     // console.log(event.type);
//     // console.log(event.eventPhase);
//     // console.log(event.currentTarget);
//     console.log(event.detail);
// })


// let link = document.querySelector('a');

// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     // event.preventDefault();
// });

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(event) {
//     console.log('The button was clicked!');
//     event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
// });

// let btn = document.querySelector('.btn');
// console.log(btn.childNodes);

// let menu = document.querySelector("#menu");

// let menuN = menu.lastChild.nodeName;
// console.log(menuN);

// let current = document.querySelector(".current");

// console.log(current.nextElementSibling);
// console.log(current.nextSibling);

let div = document.createElement("div");
div.id = "myDiv";
div.innerText = "<p>this is my div</p>";

document.body.appendChild(div);
div.className = "myDivClass";

