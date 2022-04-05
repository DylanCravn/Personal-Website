var tabButtons=document.querySelectorAll(".button-container button");
var tabButtons1=document.querySelectorAll(".button-container1 button");
var tabPanels=document.querySelectorAll(".tab-content .tabPanel");

function showPanel(panel, color){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";

    });
    tabButtons[panel].style.backgroundColor=color;
    tabButtons[panel].style.color="white";

    tabPanels.forEach(function(node){
        node.style.display="none";

    });
    tabPanels[panel].style.display="block";
    // tabPanels[panel].style.backgroundColor="color";
}

// STYLE SHEET SWITCHING
function changeColor(panel, color, sheet){
    tabButtons1.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";

    });
    tabButtons1[panel].style.backgroundColor=color;
    tabButtons1[panel].style.color="white";
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

showPanel(0, '#f44336');
changeColor(0, '#f44336', 'style1.css');
