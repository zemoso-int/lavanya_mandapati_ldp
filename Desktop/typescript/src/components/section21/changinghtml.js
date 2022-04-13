//changing html

document.getElementById("heading").innerHTML="this is a heading"
document.getElementById("logo").alt="img"


var p=document.createElement("p")
var pText=document.createTextNode("New paragraph")
p.appendChild(pText)

//to append the element at the end of the parent

document.getElementById("main").appendChild(p)

var heading=document.getElementById("heading")
document.getElementById("main").insertBefore(p,heading)

// to remove an element

var logo=document.getElementById("logo")
document.getElementById("main").removeChild(logo)



//changing style

document.getElementById("heading").style.color="blue"

