$(".navbar").load("./includes/navbar.html");
$(".footer").load("./includes/footer.html");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}