window.addEventListener("load", function () {
    const square = document.getElementsByClassName("ball-1")[0];
    const SQ = {h: square.clientHeight, w: square.clientWidth};
    const result = { y: (window.innerHeight - SQ.h), x: (window.innerWidth - SQ.w)};
    square.style.top = result.y+'px'; // MEANS IT'LL TOOK IT FROM TOP TO BOTTOM
    square.style.right = result.x+'px'; // MEANS IT'LL TOOK IT FROM RIGHT TO LEFT
    window.addEventListener("scroll", function () {
        const height = document.body.clientHeight - window.innerHeight;
        const width = document.body.clientWidth;
        const scroll = window.scrollY;
        const ratio = (scroll / height);
        const dy = result.y - (ratio * window.innerHeight);
        const dx = result.x - (ratio * window.innerWidth);
        square.style.bottom = `${dy}px`;
        square.style.left = `${dx}px`;
    });
}, false);