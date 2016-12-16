var printme = function(event) {
    console.log(this);
};
`
for (i in document.getElementsByTagName('li')) {
    console.log("thing");
    i.addEventListener("mouseover", printme);
}
`
var changeText = function(e) {
    console.log(this);
    var entry = document.getElementById('h');
    entry.value=e
};

var item = document.getElementsByTagName('LI');
item.addEventListener("mouseover", changeText);

var addElement = function(e) {
    console.log(this);
    var list = document.getElementById('thelist');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("item "));
    list.appendChild(entry);
};

var button = document.getElementById('pushit');
button.addEventListener("click", addElement);
