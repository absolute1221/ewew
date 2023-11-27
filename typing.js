class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el);
        this.interval = interval || 500
        this.delay = delay == undefined ? 1000 : delay
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ""
        setTimeout(() => this.write(), this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => this.write(i), this.interval);
        }
    }
}
new Typing({
    el: ".header__content h1",
    interval: 300,
    delay: 1000
})
new Typing({
    el: ".header__content p",
    interval: 200,
    delay: 500
})
new Typing({
    el: ".info__scroll-desc",
    interval: 100,
    delay: 0
})



const headerContent = document.querySelector('.header__content');
headerContent.addEventListener('mousemove', function () {
    moveRandomly(headerContent);
});
function moveRandomly(el) {
    const x = window.innerWidth - el.offsetWidth;
    const y = window.innerHeight - el.offsetHeight;
    const newLeft = Math.floor(Math.random() * x);
    const newTop = Math.floor(Math.random() * y);
    el.style.marginLeft = `${newLeft}px`;
    el.style.marginTop = `${newTop}px`;
}
