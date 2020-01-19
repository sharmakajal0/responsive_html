function sayHello(){
    console.log("Say Hello");
    $('#text').html("Goodbye");
    $("#text").click(function(){
        $('#text').html("Hello");
        $("#text").off("click");  
    });
};
