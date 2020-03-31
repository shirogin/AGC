var Animated,
    windowHeight,
    getPosition = el=>{return el.getBoundingClientRect().y;};
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
function init(){
    Animated=document.querySelectorAll(".Animated,.AnimatedR,.AnimatedL");
    windowHeight= window.innerHeight;
}
function fadeIn(e){
    if(getPosition(e)-windowHeight<=0)
        e.classList.add("Animate");
}
function checkPosition(){
    init();
    Animated.forEach(element => {fadeIn(element)});
};
checkPosition();