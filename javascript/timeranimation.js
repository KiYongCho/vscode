let timer = null;
let ballTop = 265;
let ballLeft = 265;
let ballSpeed = 1;

$(function() {

    $("#accel").val("속도:"+ballSpeed);

    makeTimer("moveToTop", move("top"));
    makeTimer("moveToBottom", move("bottom"));
    makeTimer("moveToLeft", move("left"));
    makeTimer("moveToRight", move("right"));

    $("#pause").on("click", function() {
        pause();
    });    

    $("body").on("keydown", function(event) {
        if (event.keyCode==37) move("left")();
        if (event.keyCode==38) move("top")();
        if (event.keyCode==39) move("right")();
        if (event.keyCode==40) move("bottom")();
        if (event.keyCode==37 && event.keyCode==38) {
            move("left")();
            move("top")();
        }
        if (event.keyCode==37 && event.keyCode==40) {
            move("left")();
            move("bottom")();
        }
        if (event.keyCode==39 && event.keyCode==38) {
            move("right")();
            move("top")();
        }
        if (event.keyCode==39 && event.keyCode==40) {
            move("right")();
            move("bottom")();
        }                                
    });

    $("#accel").on("click", function() {
        ballSpeed++;
        $("#accel").val("속도:"+ballSpeed);
    });    

});

const makeTimer = function(id, f) {
    $("#"+id).on("click", function() {
        pause();
        timer = setInterval(f, 5);
    });
};

const pause = function() {
    clearInterval(timer);
};

const move = function(direction) {
    const max = 540;
    const min = 10;
    let ballDir = null;
    let displ = 0;
    switch (direction) {
        case "top":     ballDir = ballTop;  displ = min;    break;
        case "bottom":  ballDir = ballTop;  displ = max;    
                        direction = "top";  break;
        case "left":    ballDir = ballLeft; displ = min;    break;
        case "right":   ballDir = ballLeft; displ = max;
                        direction = "left";  break;
    }
    if (direction=="top" || direction=="left") {
        return function() {
            if (ballDir >= displ) {
                ballDir -= ballSpeed;
                $("#ball").css(direction, ballDir+"px");
            }
        };
    } else {
        return function() {
            if (ballDir <= displ) {
                ballDir += ballSpeed;
                $("#ball").css(direction, ballDir+"px");
            }
        };        
    }
    
}