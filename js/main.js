$( document ).ready(function() {

    $("#item_orange_chicken_plus").click(function() { 
        var count = parseInt($("#item_orange_chicken_count").text());   
        if (isNaN(count)) {
            count = 1;
        } else { 
            count = count + 1; 
        }
        $("#item_orange_chicken_count").text(count);
    });

    $("#item_orange_chicken_minus").click(function() { 
        var count = parseInt($("#item_orange_chicken_count").text());   
        if (isNaN(count) || count <=1 ) {
            count = "";
        } else { 
            count = count - 1; 
        }
        $("#item_orange_chicken_count").text(count);
    });

    $("#chicken_add").click(function(){
        $("#item_orange_chicken_count_list").text($("#item_orange_chicken_count").text());
    });
});
