$(function() {

    $("#load").click(function() {
        $("#result").load("/text/hello.txt");
    });

});