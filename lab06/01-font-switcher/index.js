const makeBigger = () => {
   var element = document.getElementsByClassName("content")[0];
   var header = document.getElementsByTagName("h1")[0];

   size += 0.5
   headerSize += 0.5

   element.style.fontSize = size + "em";
   header.style.fontSize = headerSize + "em"

   console.log(element.style.fontSize);
   console.log(header.style.fontSize);
};

const makeSmaller = () => {
   var element = document.getElementsByClassName("content")[0];
   var header = document.getElementsByTagName("h1")[0];

   size -= 0.5
   headerSize -= 0.5

   element.style.fontSize = size + "em";
   header.style.fontSize = headerSize + "em"

   console.log(element.style.fontSize);
   console.log(header.style.fontSize);
};

var size = 1.2;
var headerSize = 2

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

