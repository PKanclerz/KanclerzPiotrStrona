
const buttonToBuy=document.querySelector(".buyClothe");
const popOut=document.querySelector(".popOut")


buttonToBuy.addEventListener("click",show)
    

    



function show(){
    
    if(popOut.style.display==="block"){
        popOut.style.display="none"
    }
    else{
        popOut.style.display="block";
       console.log("dasdasdasda")
    }
}
