function animate() {
    TweenMax.to("#hart", 1, {fill:getRandomColor(), stroke:getRandomColor(), delay:0.5, onComplete:animate});
}
animate();

function getRandomColor() {
    return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
    return min + Math.floor( Math.random() * (max - min));
}

TweenMax.from("#_maRechthoek_", 1, {attr:{x:1100}, yoyo:true, repeat:-1, ease:Linear.easeNone});

$("#andersMag").on("mouseenter", function() {
    TweenMax.to(this, 0.4, {scale:1.5, ease:Bounce.easeOut})
    TweenMax.to(this, 0.2, {scale:1, delay:0.1})
});

var tekst = document.getElementsByClassName("cls-5");
TweenMax.fromTo(tekst,2,
    {
        visible:true,
        scale:1
    },
    {
        scale:1.13,
        repeat: -1,
        yoyo: true
    });