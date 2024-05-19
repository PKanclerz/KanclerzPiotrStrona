

const btn=document.querySelector(".dropdown");
const elements=document.querySelector(".dropdownElements")


btn.addEventListener("click",show)
    

    



function show(){
    
    if(elements.style.display==="block"){
        elements.style.display="none"
    }
    else{
        elements.style.display="block";
       
    }
}
