function btnPressed()
{
    console.log("button pressed")
    document.getElementById("p1").innerHTML="Button pressed"
}

function texttyped()
{
    if(document.getElementById("i1").value=="123")
{
    document.getElementById("p2").innerHTML="valid"
}
else{
    document.getElementById("p2").innerHTML="invalid"
}
    console.log("Text typed")
}



document.getElementById("b3").addEventListener("click",btn2Pressed)
function btn2Pressed()
{
    document.getElementById("p3").innerHTML="Button2 presssed"
}


document.getElementById("p4").addEventListener("mouseover",mouse)

function mouse()
{
    this.innerHTML="you have moved"
}
