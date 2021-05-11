myID = document.getElementById("myID");

myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) {
        myID.className = "fixed show"
    } else {
        myID.className = "fixed hide"
    }
};

window.addEventListener("scroll", myScrollFunc);