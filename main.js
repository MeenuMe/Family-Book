var names = ["Subhash Nambiar", "Smitha Nambiar", "Bunny Nambiar", "Me (Meenakshi Nambiar!)!!!"];
var images = ["Dad.jpg", "Mom.jpg", "Bunny.jpg", "Me!.jpg"];
var i = 0;

function next(){
    document.getElementById("title").src = images[i];
    document.getElementById("name").innerHTML = names[i];
    i++;
    
}