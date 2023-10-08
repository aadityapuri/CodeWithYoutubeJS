const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === "white"){
      document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "grey"){
      document.body.style.background=e.target.id;
    }
    else if(e.target.id === "blue"){
      document.body.style.background=e.target.id;
    }
    else if(e.target.id === "yellow"){
      document.body.style.background=e.target.id;
    }
  });
});