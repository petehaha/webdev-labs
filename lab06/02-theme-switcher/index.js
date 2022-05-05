/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeDefault = () => {
   container.className = "default";
}

const changeDesert = () => {
   container.className = "desert";
}

const changeOcean = () => {
   container.className = "ocean";
}

const changeHighContrast = () => {
   container.className = "high-contrast";
}

var container = document.querySelector(".container")

document.querySelector('#default').addEventListener('click', changeDefault);
document.querySelector('#desert').addEventListener('click', changeDesert);
document.querySelector('#ocean').addEventListener('click', changeOcean);
document.querySelector('#high-contrast').addEventListener('click', changeHighContrast);