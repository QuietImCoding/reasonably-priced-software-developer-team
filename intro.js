// When the button is pressed, add the element and reconstruct the listeners.
var addElement = function(e) {
    console.log(this);
    var list = document.getElementById('thelist');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("item " + document.getElementsByTagName("LI").length));
    //Makes listeners for the entry before appending it
    makeListeners(entry);
    list.appendChild(entry);
};

// Sets the header's html value to the value of a list element
var matchHeader = function(e) {    
    var entry = document.getElementById('h');
    entry.innerHTML=this.innerHTML;
};

// Sets the header's html value to Hello World
var resetHeader = function(e) {
    var header = document.getElementById('h');
    header.innerHTML="Hello World!";
};

// Removes an element from thelist
var removeElement = function(e) {
    var list = document.getElementById("thelist");
    list.removeChild(this);
};

// Creates listeners for a given node
var makeListeners = function(node) {
	node.addEventListener("mouseover", matchHeader);
	node.addEventListener("mouseout", resetHeader);
	node.addEventListener("click", removeElement);
};

// Makes Listeners for all existing nodes
var nodeList = document.getElementsByTagName('LI');
for (i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
    makeListeners(nodeList[i]);
}

// Makes listener for button
var button = document.getElementById('pushit');
button.addEventListener("click", addElement);

var fibo = function(e) {
    if (e==1 || e==0) return e;
    return fibo(e-1) + fibo(e-2);
};

var fiboF = function(e) {
    var a = 1;
    var b = 1;
    var c = 0;
    for (i = 0; i < e; i++) {
	a=b;
	b=c;
	c=a+b;
    }
    return c;
};

var fibonacci = function(e) {
    console.log(this)
    var list = document.getElementById('fiblist');
    var entry = document.createElement('li');
    entry.innerHTML = fiboF(list.childElementCount + 1);
    list.appendChild(entry);
};

var fib = document.getElementById('fib');
fib.addEventListener("click", fibonacci);
