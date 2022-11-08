const menuBtn = document.getElementById("showMenu")
const bar = document.getElementById("bar");
const menu = document.getElementById("menu")

//showing navbar menu when button is clicked
menuBtn.addEventListener("click", function(e){
    if (menuBtn.clicked == true){
        menu.style.display == "flex";
    }
    else{
        menu.style.display == "none";
    }
});
