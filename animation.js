$(window).on("load", sidenVisses);

function sidenVisses() {
    console.log("sidenvises");
    $(".menubutton").on("click", trykPåMenubutton);
}

function trykPåMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");
}

var myIndex = 0;
slidet();

function slidet() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(slidet, 3000);
}
