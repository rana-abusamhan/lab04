let userName=prompt("Please enter your name");
document.getElementById("userName").innerHTML="Welcome " + userName;



let str=confirm("Are you a vegetarian ?");
if (str==true){
document.getElementById("isVegetarian").innerHTML="Im a Vegetarian";
}
else{
    document.getElementById("isVegetarian").innerHTML="Im a not Vegetarian";
}



let color= prompt("What is your favorite color?"); 
document.getElementById("nav").style.backgroundColor=color;
document.getElementById("userName").style.backgroundColor=color;
document.getElementById("isVegetarian").style.backgroundColor=color;