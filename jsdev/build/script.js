let activeIndex=0;function loopSlides(){const e=document.getElementsByClassName("slide");e[activeIndex].classList.remove("active"),activeIndex++,activeIndex==e.length&&(activeIndex=0),e[activeIndex].classList.add("active"),console.log(e.length,activeIndex)}window.onload=function(){document.getElementsByClassName("slide")[activeIndex].classList.add("active"),setInterval((()=>{loopSlides()}),2e3)};