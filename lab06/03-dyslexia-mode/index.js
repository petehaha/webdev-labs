const changeDyslexia = () => {
  if(container.className == "dyslexia-mode"){
    container.className = "content";
  }
  else{
    container.className = "dyslexia-mode";
  }
  
}

var container = document.querySelector(".content")

document.querySelector('#dyslexia-toggle').addEventListener('click', changeDyslexia);