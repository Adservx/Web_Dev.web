let age;
age=prompt("enter your age:");
if(age<18)
    {
        alert("you can't do sex");
    }
else
   {
       alert("Enjoy!!");
   }
   
let bmla= document.querySelector("button");
bmla.addEventListener("click",iglish);

function iglish()
{
    let bis=prompt("enter your gf english");
    alert("Your gf english is "+bis);
    bmla.textContent="oohh yehhh!! You can try again";
}
let mode=prompt("select your theme //dark,light\\");
let color;
if (mode==="dark")
    {
        color="black";
    }
    else
    {
        color="white";
    }
console.log(color);

let ag=15;
ag > 18 ? "you are not adult": "you are adult";

let fng=prompt("Enter a numbers:");
if(fng%5==0)
    {
        alert("This number is multiple of 5");

}
else
{
    alert("This number is not multiple of 5");  
}
let i=1;
for(i;i<6;i++)
    {
        console.log("Gudd");
    }
    let sn=0;
    for(let i=1;i<=5;i++)
        {
            sn+=i;
        }
        console.log("sn is:",sn);
let u="bimala";
let spellsz=0;
for(let i of u)
    {
        spellsz++;
    }
console.log("word length=",spellsz);
let std={
    name: "vivek",
    sex_life: "very good",

}
for(let i in std)
    {
        console.log("key is:",i,"value is:",std[i]);

    }
