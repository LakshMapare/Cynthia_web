const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1
        
    })
    . from("#herofooter",{
        y:-10,
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1
    })
}


function circleMouseFollower(){
    window.addEventListener("mousemove", function(event){
        document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px,${event.clientY}px)`;
    });
}


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
         
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:details.clientX,
            
        });
    });
});


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mouseleave", function(details){
        
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power1,
           duration:0.5,
        });
    });
});

circleMouseFollower()
firstPageAnim()
