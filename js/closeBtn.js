
const closeBtn=document.querySelector(".closeBtn");
const popOutCard=document.querySelector(".popOut")


closeBtn.addEventListener("click",show)
    

    



function show(){
    
    if(popOutCard.style.display==="block"){
        popOutCard.style.display="none"
    }
    else{
        popOutCard.style.display="block";
       
    }
}
