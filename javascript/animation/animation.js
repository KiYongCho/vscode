let frameCount = 0;
let ddgMax = 160;
let ddgHInterval = 5;

$(function() {
    imageAnimate();
    ddgAnimate();
});

const imageAnimate = function() {
    const timer = setInterval(function() {
        $("#walker").attr("src", `images/${frameCount++%6+1}.png`);
    },300);
};

const ddgAnimate = function() {
    const timer = setInterval(function() {
        console.log(ddgMax);
        if (ddgMax==220) {
            ddgHInterval = -5;
        } else if (ddgMax==100) {
            ddgHInterval = 5;
        } 
        $("#ddg").css("top", `${ddgMax = ddgMax + ddgHInterval}px`);        
    },100);
};
