// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.

const ram=((min,max)=>
{
    const randnum=Math.floor(Math.random()*(max-min))+min
    return randnum;
})

const b1Pressed=()=>
{
    const children=Math.random()*100
    document.getElementById("p1").innerHTML=children;
}


const b2Pressed=()=>
{
    console.log("button pressed");
    const child1=Number(document.getElementById("rand1").value)
    const child2=Number(document.getElementById("rand2").value)
    const children=Math.floor(Math.random() * (child2 - child1)) + child1
    document.getElementById("p2").innerHTML=children;
}

const loreumb3=()=>
{
    document.getElementById("p3").innerHTML=lorem;

}

const loreumb4=()=>
{
    const sentence=Number(document.getElementById("rand3").value)
    const loreum2=lorem.split(".")
    let newLoreum;
    for(let i=0;i<sentence;i++)
    {
        newLoreum=newLoreum+loreum2[i]+"."
    }
    document.getElementById("p4").innerHTML=newLoreum

}
const loreumb5=()=>
{
    const sentence=Number(document.getElementById("rand4").value)
    const loreum2=lorem.split("")
    let newLoreum="";
    for(let i=0;i<sentence;i++)
    {
        newLoreum=newLoreum+loreum2[i]
    }
    document.getElementById("p5").innerHTML=newLoreum

}

const dateFunction=()=>
{
    let date=new Date();
    const month=date.getMonth()+1
    let newDate=month+" "+date.getDay()+" "+date.getFullYear()
    document.getElementById("p6").innerHTML=newDate;
}

const timeFunction=()=>
{
    let time=new Date();
    let timeNew=time.getHours()
    const timeSec=time.getMinutes()
    let ampm="am";
    if(timeNew>12)
    {
        timeNew=timeNew-12;
        ampm="pm"
    }
    document.getElementById("p7").innerHTML=timeNew+":"+timeSec+" "+ampm;
}


const inch=()=>
{
    const inches=Number(document.getElementById("rand5").value)
    const feet=inches/12;
    let newFeet=feet.toFixed(2)
    document.getElementById("p8").innerHTML=newFeet
}
const feet=()=>
{
    const feets=Number(document.getElementById("rand6").value)
    const inches=feets*12;
    document.getElementById("p9").innerHTML=inches
}

const comparison=()=>
{
    const s1=document.getElementById("rand7").value
    const s2=document.getElementById("rand8").value
    if(s1.length==s2.length)
    {
        document.getElementById("p10").innerHTML="yes"
    }
    else{
        document.getElementById("p10").innerHTML="no"

    }
}

const randPassword=()=>
{
    let char=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","@","!","-"]
    let pass=""
    for(let i=0;i<12;i++)
    {
        let num=ram(0,39)
        pass=pass+char[num]
    }
    document.getElementById("p11").innerHTML=pass
}

const oddEven=()=>
{
    let num=Number(document.getElementById("rand9").value)
    if(num%2==0)
    {
        document.getElementById("p12").innerHTML="it is even number"
    }
    else{
        document.getElementById("p12").innerHTML="it is odd number"
    }
}


const colors = ["red", "blue","yellow","orange","green","white","purple"]

const randColor=()=>
{
    const num=ram(0,6)
    const color=colors[num]
    document.getElementById("p13").innerHTML=color

}

const names =
[
    {
        firstName: "lavanya reddy",
        lastName: "Mandapati"
    },
    {
        firstName: "Navya",
        lastName: "Anumolu"
    },
    {
        firstName: "Ramya",
        lastName: "Guntuku"
    },
    {
        firstName: "Mamatha",
        lastName: "Bellamkonda"
    },
    {
        firstName: "Sravani",
        lastName: "Bittla"
    },
    {
        firstName: "Sneha",
        lastName: "Puppala"
    },
    {
        firstName: "Rasaghna",
        lastName: "Kuturu"
    },
    {
        firstName: "Akshaya",
        lastName: "Reddy"
    },
    {
        firstName: "Bhavana",
        lastName: "Dasari"
    }


]

const randName=()=>
{
    const num=ram(0,9)
    const name=names[num]
    document.getElementById("p14").innerHTML=name.firstName+" "+name.lastName
}




