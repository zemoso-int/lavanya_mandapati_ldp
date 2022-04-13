var person={
    firstName:"lavanya",
    lastName:"Reddy",
    favColor:"blue"
}

//adding property to onject

person.age=10

//deleting properties

delete person.favColor



// how to add methods in different way


var person={
    firstName:"Lavanya",
    lastName:"Reddy",
    favColor:"blue",
    myName:function()
    {
        console.log(this.firstName+""+this.lastName)
    }
}

var person={
    firstName:"Lavanya",
    lastName:"Reddy",
    favColor:"blue",
    myName()
    {
        console.log(this.firstName+""+this.lastName)
    }
}


//getters and setters
var person={
    firstName:"Lavanya",
    lastName:"Reddy",
    favColor:"blue",
    get myName()
    {
        return this.firstName+" "+this.lastName
    },
    set myName(value)
    {
        var name=value.split(" ")
        this.firstName=name[0]
        this.lastName=name[1]
    }
}


//constructors

var person1={
    firstName:"Lavanya",
    lastName:"Reddy",
    favColor:"blue",
    myName()
    {
        return this.firstName+" "+this.lastName
    }
}

var person2={
    firstName:"Raj",
    lastName:"bhole",
    favColor:"blue",
    myName()
    {
        return this.firstName+" "+this.lastName
    }
}


//
function Person(first,last)
{
    this.firstName=first
    this.lastName=last
    this.myName=function()
    {
        console.log(this.firstName+" "+this.lastName)
    }
}

var person1=new Person("lavanya","mandapati")
var person2=new Person("suma","reddy")



//prototype


function Person(first,last)
{
    this.firstName=first
    this.lastName=last
    this.myName=function()
    {
        console.log(this.firstName+" "+this.lastName)
    }
}
//you cant add object property to constructor directly

Person.prototype.favoriteAnimal="dog"
Person.prototype.printAnimal=function()
{
    console.log(this.favoriteAnimal)
}


