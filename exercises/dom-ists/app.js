var userCandy = document.getElementById("candyImput");
var candyText = userCandy.value;

function addCandy() {  
    var userCandy = document.getElementById("candyInput");
    var candyText = userCandy.value;

    // create empty <li> tag
    var li = document.createElement("li");
    // create text node with text of the user's candy choice
    var txtNode = document.createTextNode(candyText);
    // append txtNode to the li element
    li.appendChild(txtNode);
    // get the ul and attach li as the last child of the ul
    var ul = document.getElementById("candyList");
    ul.appendChild(li);
}