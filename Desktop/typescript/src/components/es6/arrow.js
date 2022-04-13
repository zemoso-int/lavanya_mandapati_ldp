const sayMyname = () => {
  console.log("hello world");
};

const race = "1";
const winners = ["hunter", "singa", "Imda"];

const win = winners.map((winner, i) => ({
  name: winner,
  race: race,
  place: i,
}));


const ages=[23,34,45,3,24,5,6,101]

const foo=ages.filter(age=>
    {
        if(age>60)
        {
            console.log("yes")
        }
    })