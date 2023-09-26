/*  -18- */
/*** DOM ***/
//
const btn = document.getElementById('button');
const box = document.getElementById('box');
const nombre = document.getElementById('nombre');
//
btn.addEventListener('click', () => {
    console.log("!event click is activated.");
})
//
btn.addEventListener('dblclick', () => {
    console.log("!event dblclick is activated.");
})
//
box.addEventListener('mouseenter', () => {
    //box.style.background = "green";
    box.classList.remove('red');
    box.classList.add('green');
    console.log("!event mouseenter is activated.");
})
//
box.addEventListener('mouseleave', () => {
    //box.style.background = "red";
    box.classList.replace('green', 'red');
    console.log("!event mouseleave is activated.");
})
//
box.addEventListener('mousedown', () => {
    ;
    console.log("!event mousedown is activated.");
})
//
box.addEventListener('mouseup', () => {
    ;
    console.log("!event mouseup is activated.");
})
//
nombre.addEventListener('keydown', () => {
    ;
    console.log("!event keydown is activated.");
})