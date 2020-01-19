// $("p").dblclick(function(){
//     $(this).hide();
// });

$(document).ready(function(){
    $("#text").click(function(){
        $(this).html("hello");
    });
});

// $("#text").html("Goodbye");

$(document).ready(function(){
    $("p").on("dblclick", function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $(this).hide();
    });
});

// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color", "green");
    });
});
