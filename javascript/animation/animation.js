let frameCount = 0;
let ddgTop = 250;

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
        if (ddgTop==100) ddgTop = 250;
        console.log(`${ddgTop-=5}px`);
        $("#ddg").css("top", `${ddgTop-=5}px`);        
    },100);
};