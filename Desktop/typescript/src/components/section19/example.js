//array length

var arr=[1,2,3,4,5]

arr.length

//converting array to string


var arr=["hello","world"]

arr.toString()

var arr=["hii","world"]
var newarr=arr.join("|")


//merging arrays

var arr1=[1,2,3,4]
var2=[4,5,7,8]
var newarr=arr1.concat(arr2)


//Sorting a string array
var arr=["a","b","c"]
arr.sort()
arr.reverse()


//sorting a number array

var num=[25,5,100]
num.sort()

num.sort(function(a,b){return a-b})

num.sort(function(a,b){return b-a})

//array foreach and map

var num=[1,2,4,5,6]

num.forEach(funky)

function funky(value,index,array)
{
    console.log(index+"\n")
}


var num=[1,2,3,4,5]

var newNum

newNum=num.map(funky)

function funky(value,index,array)
{
    newNum=index +""+ value
    return newNum
}


//Array filter

var num=[1,2,3,4,5]
var even=num.filter(isEven)

function isEven(value,index,array)
{
    return value%2==0
}