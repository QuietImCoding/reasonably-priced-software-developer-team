var addElement = function(e) {
    console.log(this);
    var list = document.getElementById('thelist');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("item " + document.getElementsByTagName("LI").length));
    list.appendChild(entry);
    makeListeners();
};

var matchHeader = function(e) {    
    var entry = document.getElementById('h');
    entry.innerHTML=this.innerHTML;
};

var resetHeader = function(e) {
    var header = document.getElementById('h');
    header.innerHTML="Hello World!";
};

var removeElement = function(e) {
    var list = document.getElementById("thelist");
    list.removeChild(this);
};

var makeListeners = function(e) {
    var nodeList = document.getElementsByTagName('LI');
    for (i = 0; i < nodeList.length; i++) {
	nodeList[i].addEventListener("mouseover", matchHeader);
	nodeList[i].addEventListener("mouseout", resetHeader);
	nodeList[i].addEventListener("click", removeElement);
    }
};

makeListeners();
var button = document.getElementById('pushit');
button.addEventListener("click", addElement);
