let timer = null;
let ballTop = 265;
let ballLeft = 265;
let ballSpeed = 1;

$(function() {

    $("#accel").val("속도:"+ballSpeed);

    $("#moveToTop").on("click", function() {
        pause();
        timer = setInterval(moveToTop, 5);
    });
    $("#moveToBottom").on("click", function() {
        pause();
        timer = setInterval(moveToBottom, 5);
    });
    $("#pause").on("click", function() {
        pause();
    });    
    $("#moveToLeft").on("click", function() {
        pause();
        timer = setInterval(moveToLeft, 5);
    });
    $("#moveToRight").on("click", function() {
        pause();
        timer = setInterval(moveToRight, 5);
    });

    $("body").on("keydown", function(event) {
        if (event.keyCode==37) moveToLeft();
        if (event.keyCode==38) moveToTop();
        if (event.keyCode==39) moveToRight();
        if (event.keyCode==40) moveToBottom();
        if (event.keyCode==37 && event.keyCode==38) {
            moveToLeft();
            moveToTop();
        }
        if (event.keyCode==37 && event.keyCode==40) {
            moveToLeft();
            moveToBottom();
        }
        if (event.keyCode==39 && event.keyCode==38) {
            moveToRight();
            moveToTop();
        }
        if (event.keyCode==39 && event.keyCode==40) {
            moveToRight();
            moveToBottom();
        }                                
    });

    $("#accel").on("click", function() {
        ballSpeed++;
        $("#accel").val("속도:"+ballSpeed);
    });    

});

const moveToTop = function() {
    if (ballTop >= 10) {
        console.log("ballTop:" + ballTop);
        ballTop -= ballSpeed;
        $("#ball").css("top", ballTop+"px");
    }
};

const moveToBottom = function() {
    if (ballTop <= 540) {
        console.log("ballTop:" + ballTop);
        ballTop += ballSpeed;
        $("#ball").css("top", ballTop+"px");
    }
};

const pause = function() {
    clearInterval(timer);
};

const moveToLeft = function() {
    if (ballLeft >= 10) {
        console.log("ballLeft:" + ballLeft);
        ballLeft -= ballSpeed;
        $("#ball").css("left", ballLeft+"px");
    }
};

const moveToRight = function() {
    if (ballLeft <= 540) {
        console.log("ballLeft:" + ballLeft);
        ballLeft += ballSpeed;
        $("#ball").css("left", ballLeft+"px");
    }
};