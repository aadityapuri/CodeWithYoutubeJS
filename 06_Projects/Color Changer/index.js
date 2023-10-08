const buttons = document.querySelectorAll('.button');
const style = document.body.style;
buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === "white"){
      style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "grey"){
      style.background=e.target.id;
    }
    else if(e.target.id === "blue"){
      style.background=e.target.id;
    }
    else if(e.target.id === "yellow"){
      style.background=e.target.id;
    }
  });
});