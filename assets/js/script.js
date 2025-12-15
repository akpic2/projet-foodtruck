(function(){
    const header = document.querySelector('header');
    const onScroll = () => {
        if(window.scrollY > 5) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    
    onScroll();
})();

const histoireWrapper = document.querySelector('.acceuil_histoire_wrapper');
let isPaused = false;

window.addEventListener('scroll', () => {
    const top = histoireWrapper.offsetTop;
    const bottom = top + histoireWrapper.offsetHeight;
    const scroll = window.scrollY + window.innerHeight / 2;

    if (!isPaused && scroll >= top && scroll <= bottom) {
        isPaused = true;
        document.body.classList.add('stop-scroll');
        setTimeout(() => {
            document.body.classList.remove('stop-scroll');
            isPaused = false;
        }, 500); // 500ms pause
    }
});