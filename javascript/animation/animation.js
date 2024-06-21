let frameCount = 0;

$(function() {
    imageAnimate();
});

const imageAnimate = function() {
    const timer = setInterval(function() {
        console.log(`images/${frameCount%6+1}.png`);
        $("#walker").attr("src", `images/${frameCount%6+1}.png`);
        frameCount++;        
    },50);
};