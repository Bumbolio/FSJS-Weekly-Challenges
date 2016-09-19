function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    $('#menu li').removeClass('active');

    $('#' + 'menu_item_' + id).parent().addClass('active');

    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}

$('#menu a').click(function(e){
    e.preventDefault();
    openBlock(this.id.replace('menu_item_', ''));
});

$('#menu a').hover(function(){
    $(this).addClass('hover');
}, function(){
    $(this).removeClass('hover');
});

$('#menu a').tooltip({delay: 1000});

// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu

