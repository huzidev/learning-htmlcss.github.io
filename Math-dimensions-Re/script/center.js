// window.addEventListener("load", function () {
//     const circle = this.document.getElementsByClassName("ball-2")[0];
//     const CH = circle.clientHeight;
//     const CW = circle.clientWidth;
//     const RY = window.innerHeight - CH;
//     const RX = window.innerWidth - CW;
//     circle.style.bottom = RY + "px"
//     circle.style.right = RX + "px"
//     window.addEventListener("scroll", function () {
//         const ratio = (window.scrollY) / (this.document.body.clientHeight - this.innerHeight)
//         var dy = RY - (ratio * (RY));
//         var dx = RX - (ratio * (RX));
//         circle.style.bottom = `${dy}px`
//         circle.style.right = `${dx}px`
//         if (ratio > 0.5) {
//             circle.style.top = `${dy}px`
//             circle.style.left = `${dx}px`
//         }
//         else {
//             circle.style.center = `${dy}px` // SO IT'LL WORK FROM CENTER
//             circle.style.left = `${dx}px`
//         }
//         let h = window.innerHeight
//         let w = window.innerWidth
//         console.log(h, w);
//         console.log(dy, dx, ratio, circle.style.bottom, circle.style.right);
//     })
// })