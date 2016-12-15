var printme = function(event) {
    console.log(this);
};

for (i in document.getElementsByTagName('li')) {
    console.log("thing");
    i.addEventListener("mouseover", printme);
}
