window.addEventListener("load", function () {
    const content = this.document.getElementsByClassName("ball-12")[0];
    const CH = content.clientHeight;
    const CW = content.clientWidth;
    const RY = window.innerHeight - CH
    const RX = window.innerWidth - CW
    content.style.bottom = (window.innerHeight / 2)+"px"
    content.style.right = RX+"px"
    window.addEventListener("scroll", function () {
        const height = this.document.body.clientHeight - window.innerHeight
        const ratio = (window.scrollY) / (height)
        var dy = RY - (ratio * (RY * 2)); 
        var dx = RX - (ratio * (RX ) * 2);
        content.style.bottom = `${dy / 2}px` // THIS METHOD IS USED IF WE WANTED TO MOVE IT FROM HALF OF THE Y-AXIS MEANS FROM THE CENTER OF THE PAGE
        content.style.right = `${dx}px`
        if (ratio >= 0.5 && ratio <=1.0 ) {
            // dx = RX - RX
            content.style.right = `0px` // MEANS NO MOVEMENT AT RIGHT SIDE OF THE PAGE 
            content.style.bottom = `${-dy}px` // IF WE USED (DY / 2) SO IT'LL JUST COVER HALF OF THE DISTANCE OF THE PAGE
        }
    })
})