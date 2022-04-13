function getMessage()
    {
        return "hello world"
    }

    getMessage()


//passing the buck

function getCost()
{
    return 5
}
console.log("$"+getCost())



function getNumber()
{
    return 5
}

function getNUmberFrom()
{
    return getNumber()+5
}

console.log(getNUmberFrom())


//parameters and arguments

function message(message1,message2)
{
    console.log(message1)
    console.log(message2)
}
message("hello","john")


//constants

const thing="hello"

const arr=[1,2,3]

//variable scope

var num=1
function thing()
{
    num=2
    var num2=2

}

if(1==1)
{
    let num=1
    console.log(num)
}
console.log(num)

if(1==1)
{
    var num=1
    console.log(num)
}
console.log(num)


//objects

var person={
    firstname:"lavanya",
    favColor:"white",
    children:["child1","child2"],
    thing:
    {
        name:"object",
        color:"red"
    }
}

console.log(person["firstname"])


//methods

var theory={
    book:"steve smith",
    checkout:function()
    {
        console.log("You have checked out")
    },
    checkin:function()
    {
        console.log("you have checked in")
    }
}

theory.checkout()


var theory={
    book:"steve smith",
    checkout:function()
    {
        console.log("You have checked out"+theory.book)
    },
    checkin:function()
    {
        console.log("you have checked in")
    }
}

//this key word

var theory={
    book:"steve smith",
    checkout:function()
    {
        console.log("You have checked out"+this.book)
    },
    checkin:function()
    {
        console.log("you have checked in")
    }
}


//assigning new values

var person={
    firstname:"lavanya",
    favColor:"white",
    children:["child1","child2"],
    thing:
    {
        name:"object",
        color:"red"
    }
}

person.firstname="john"