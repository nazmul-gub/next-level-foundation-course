// let a = document.getElementById("heading");
// console.log(a);

// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);

// let first = document.querySelector("p");
// console.dir(first);

// let a = document.querySelector("h3");
// console.dir(a);

// let ab = document.querySelector("h2");
// console.dir(ab);

// let box = document.querySelectorAll(".box");
// console.log(box);

// box[1].innerText = "new text from DOM";

// let i = 1;
// for(div of box) {
//     div.innerText = `new box from DOM ${i}`;
//     i++;
// }

// let ab = document.querySelector(".box");
// console.log(ab);

// let a = ab.getAttribute("class");
// console.log(a);

// let para = document.querySelector("#myPara");
// console.log(para);

let st = document.querySelector("div");
// console.log(st);

st.style.backgroundColor = "blue";
st.style.color = "whitesmoke";
st.innerText = "hello dom";

// st.style.visibility = "hidden"


let newBtn = document.createElement("button");
newBtn.innerText = "Join us"
console.log(newBtn);

// st.append(newBtn);
// st.prepend(newBtn);
// st.before(newBtn);
st.after(newBtn);

let newHeading = document.createElement("h1");

newHeading.innerHTML = "<i>I am new</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("#myPara");
para.remove();