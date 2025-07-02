document.getElementById("fbutid").getElementsByTagName("button")[0].addEventListener("click",function(){fun(this)})
function fun(thiss){
    if(thiss.className=="fbut"){
        document.getElementsByClassName("conbut")[0].getElementsByTagName("button")[0].disabled=false
        thiss.className=("fbut1")
        document.getElementById("fbutid").getElementsByTagName("button")[1].className=("fbut")
    }
    
}
document.getElementById("fbutid").getElementsByTagName("button")[1].addEventListener("click",function(){fun2()})
function fun2(){
        if(document.getElementById("fbutid").getElementsByTagName("button")[1].className=="fbut"){
            document.getElementsByClassName("conbut")[0].getElementsByTagName("button")[0].disabled=true
            document.getElementById("fbutid").getElementsByTagName("button")[1].className="fbut1"
            document.getElementById("fbutid").getElementsByTagName("button")[0].className=("fbut")
        }
}