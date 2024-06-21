let frameCount = 0;
let walkerSpeed = 120;

let ddgMax = 160;
let ddgHInterval = 5;
const ddgSpeed = 10;

$(function() {
    imageAnimate();
    ddgAnimate();
});

const imageAnimate = function() {
    const timer = setInterval(function() {
        $("#walker").attr("src", `images/${frameCount++%6+1}.png`);
    }, walkerSpeed);
};

const ddgAnimate = function() {
    const timer = setInterval(function() {
        //console.log(ddgMax);
        if (ddgMax==220) {
            ddgHInterval = -ddgSpeed;
        } else if (ddgMax==100) {
            ddgHInterval = ddgSpeed;
        } 
        $("#ddg").css("top", 
        `${ddgMax+=ddgHInterval}px`);        
    },100);
};
