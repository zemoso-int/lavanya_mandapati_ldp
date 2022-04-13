var thing="hello"

thing.length

if(thing.length>5)
{
    //do nothing
}

var sentence="I say hello and hello twice"

//first occurence of given string

sentence.indexOf("hello")

sentence.lastIndexOf("hello")

//if the string doesnt exist gives -1
sentence.indexOf("it")

//search

sentence.search("hello")


var str="Happy, excited,calm"

var sl=str.slice(0,5)

sl=str.slice(2)

//to go from back

sl=str.slice(-13,-6)


var sb=str.substring(2,14)

//substr doesnt support negative values

var sr=str.substr(7,14)
//second parameter is the length of the string that is required



///replacing  content

var str="I have turkey for lunch and turkey for dinner"
var lunch=str.replace("turkey","pasta")

lunch=str.replace("TURKEY","pasta")

lunch=str.replace(/Turkey/i,"pasta")


lunch=str.replace(/Turkey/g,"pasta")


lunch=str.replace(/Turkey/gi,"pasta")

//coverting to upper 

var word="happy"
var upperhnad=word.toUpperCase()

var sentence ="  hellow world"

var clean=sentence.trim()


//converting string to array

var str="1,2,3,4,5"

var arr=str.split(",")


//coverting string to number
var num="5"
var number=Number(num)
newNum=Number("5.5")

var num=""
num=parseInt("5.5")//5
num=parseFloat("5")//5
num=parseFloat("5.5")//5.5

