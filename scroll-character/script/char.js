let scrollFix;

function character() {
    let desc = document.getElementById("character-desc");
    let char = document.getElementById("character-char");
    window.addEventListener("scroll", function () {
        clearTimeout(scrollFix);
        scrollFix = setTimeout(() => {
            let cond = {hello: window.innerHeight - 180};
            cond.hope = cond.hello + document.getElementById("about").offsetHeight - 100;
            cond.looking = cond.hope + document.getElementById("highlight").offsetHeight + 200;
            cond.skills = cond.looking + document.getElementById("skills").offsetHeight + 400;
            cond.contact = cond.skills + document.getElementById("work").offsetHeight + 700;
            if (this.scrollY > cond.hello && !scroll.hello) {
                scroll.hello = true;
                desc.innerHTML = "Hello, How Are You?";
                desc.classList.add("hello");
                char.classList.add("hello");
            }
            else if (this.scrollY < cond.hello && scroll.hello) {
                scroll.hello = false
                desc.classList.remove("hello");
                char.classList.remove("hello");
            }
        }, 100);
    });
};
character();