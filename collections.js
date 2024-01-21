var productcontainer=document.getElementById("prodcont")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(var count=0;count<productlist.length;count++){
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }else{
            productlist[count].style.display="block"
        }
    }
})