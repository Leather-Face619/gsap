const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;

function circle(xscale, yscale) {
    window.addEventListener("mousemove", function (dep) {
        // console.log(dep.clientX,dep.clientY);

        document.querySelector("#minicircle").style.transform = `translate(${dep.clientX}px, ${dep.clientY}px) scale(${xscale} , ${yscale})`;


    })

}

function circlechaptakaro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dep) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.5, dep.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.5, dep.clientY - yprev);
        //    var xdiff= dep.clientX- xprev;
        //    var ydiff= dep.clientY- yprev;
        xprev = dep.clientX;
        yprev = dep.clientY;
        // console.log(xdiff,ydiff);
        circle(xscale, yscale);
        this.setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dep.clientX}px, ${dep.clientY}px) scale(1,1)`;
        }, 100)
    });



}
circlechaptakaro();
circle();
document.querySelectorAll(".elem").forEach(function (elem) {
    var diffimg = 0;
    var rotate = 0;
    elem.addEventListener("mousemove", function (details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffimg = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector(".elem img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffimg * .7)
        })


    });
    elem.addEventListener("mouseleave", function (details) {

        gsap.to(elem.querySelector(".elem img"), {
            opacity: 0,
            ease: Power1,
            duration: 0.5
        })


    });
});







function fstpage() {
    var tt = gsap.timeline();

    tt.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    }
    )
    tt.to(".boundingelem", {
        y: '0',
        delay: -1,
        stagger: .2,
        duration: 2,
        ease: Expo.easeInOut
    }
    )
    tt.from("#herofooter", {
        y: '20',
        stagger: .2,
        opacity: 0,
        delay: -1,
        duration: 1,
        ease: Expo.easeInOut
    }
    )
}

fstpage();