let elements=document.querySelectorAll(".restricted");
for(let i=0;i<elements.length;i++){
    elements[i].addEventListener(("click"),(e)=>{
        e.preventDefault();
        let currUser=JSON.parse(localStorage.getItem("shopMeCurrUser"));
        if(currUser!=null)
            window.location.href=elements[i].href;
        else
            window.location.href="./pleaseLogin.html";
    })
}