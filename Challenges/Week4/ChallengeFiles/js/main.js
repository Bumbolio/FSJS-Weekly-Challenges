function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    
    var listElements = document.getElementById("menu").getElementsByTagName("li");

    for (var i=0; i < listElements.length; i++) {
        listElements[i].className = "";
    }

    document.getElementById('menu_item_' + id).parentElement.className += "active";

}

var linkElements = document.getElementById("menu").getElementsByTagName("a");

for (var i=0; i < linkElements.length; i++) {
    linkElements[i].addEventListener("click", function(e){
        e.preventDefault();
        openBlock(this.id.replace('menu_item_', ''));
    });
    
    linkElements[i].addEventListener("onmouseover", function(e){
        this.className += "hover";
    });

    linkElements[i].addEventListener("onmouseout", function(e){
        this.className = "";
    });

}

$('#menu a').tooltip({delay: 1000});

