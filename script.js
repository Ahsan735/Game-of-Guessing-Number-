window.onload=function (){

console.log("Hey this is my password generator.")



const pass=()=>{

    let upper=["A","Z","G","H","O","P","E","V","Q","T","S"];
    let lower=["u","i","y","m","b","w","l","x","d","j","c"]
    let num=["0","9","8","7","6","5","4","3","2","1"]
    let signs=["~","!","@","#","$","%","^","&","*","(",")","{","}","[","]","`","<","?"]

    allChars=[...upper,...lower,...num,...signs];

let password="";

for(let i=0;i<12;i++){
    let index=Math.floor(Math.random()*allChars.length)
    password +=allChars[index];
}
let kr=document.createElement("h2");
document.body.prepend(kr);
kr.innerHTML=password;
document.body.style.background=("linear-gradient(125deg , #75a3bfff, #5757a5ff)")
document.body.style.color="black"

// alert(`Your password is ${password}`)


}

pass();



}