const allButtons=document.querySelectorAll(".more");

allButtons.forEach(btn => {
    btn.addEventListener("click",()=>{

        let url="clothe"+btn.id+".html"
        window.location=url
        
    })
});