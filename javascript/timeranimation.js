let timer = null;
let ballTop = 265;
let ballLeft = 265;
let movePixel = 1;
const max = 540;
const min = 10;
const interval = 5;

$(function() {

    $("#accel").val("속도:"+movePixel);

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
            move("left")(); move("top")();
        }
        if (event.keyCode==37 && event.keyCode==40) {
            move("left")(); move("bottom")();
        }
        if (event.keyCode==39 && event.keyCode==38) {
            move("right")();    move("top")();
        }
        if (event.keyCode==39 && event.keyCode==40) {
            move("right")();    move("bottom")();
        }                                
    });

    $("#accel").on("click", function() {
        movePixel++;
        $("#accel").val("속도:"+movePixel);
    });    

});

const makeTimer = function(id, f) {
    $("#"+id).on("click", function() {
        pause();
        timer = setInterval(f, interval);
    });
};

const pause = function() {
    clearInterval(timer);
};

const move = function(direction) {
    switch (direction) {
        case "top": { 
            return function() {
                if (ballTop >= min) {
                    ballTop -= movePixel;
                    $("#ball").css("top", ballTop+"px");
                }
            };
        }
        case "bottom": { 
            return function() {
                if (ballTop <= max) {
                    ballTop += movePixel;
                    $("#ball").css("top", ballTop+"px");
                }
            };
        }
        case "left": {
            return function() {
                if (ballLeft >= min) {
                    ballLeft -= movePixel;
                    $("#ball").css("left", ballLeft+"px");
                }
            };
        };
        case "right": {
            return function() {
                if (ballLeft <= max) {
                    ballLeft += movePixel;
                    $("#ball").css("left", ballLeft+"px");
                }
            };
        }; 
    }
    
}