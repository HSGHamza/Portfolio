document.addEventListener("scroll",()=>{const element = document.querySelector(".logo")
if(window.pageYOffset == 0)
{
    element.style.height=""
    element.style.marginLeft = ""
}
else
{
    if(window.matchMedia('(max-width: 500px)').matches)
    {
        element.style.height="50px"
        element.style.marginLeft = "-100%"
    }
    else{
        element.style.height="50px"
        element.style.marginLeft = "-55px"
    }
}
})

//mobile Element

document.querySelector('.topnav').style.display = "none";

function menu() {
    var x = document.querySelector('.topnav');
    if (x.style.display === "none") {
      x.style.display = "";
    } else {
      x.style.display = "none";
    }
  }


