const scroll =new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true
});

function nav(){
    var nav=document.querySelector("#nav")
nav.addEventListener("mouseover",function(){
    gsap.to(".cover",{
        height:100,
        duration:.3
    })

})
nav.addEventListener("mouseout",function(){
    gsap.to(".cover",{
        height:3,
        duration:.3
    })
})
var nav=document.querySelector("#nav")
nav.addEventListener("mouseout",function(){
    gsap.to("#mid",{
        height:1,
        duration:.3
    })
})
nav.addEventListener("mouseout",function(){
    gsap.to("#right",{
        height:1,
        duration:.3
    })
})
nav.addEventListener("mouseover",function(){
    gsap.to("span",{
        opacity:1,   
        duration:-.1})
    })
nav.addEventListener("mouseout",function(){
    gsap.to("span",{
        opacity:0,
        duration:-.1
       })
    })

}
nav()

function line(){    
document.querySelectorAll(".text")
.forEach(function(text){
    text.addEventListener("mouseenter",function(dets){
        gsap.to(dets.target.children[1],{
            width:"100%",
            left:"0%",
            ease:Expo.easeInOut,
            duration:.5,
         })
    })
    text.addEventListener("mouseleave",function(dets){
        gsap.to(dets.target.children[1],{
            width:"0%",
            left:"100%",
            ease:Expo.easeInOut,
            duration:.5,
            onComplete:function(){
                dets.target.children[1].style.left="0";
            }
         })
    })
})
}
line()

var h1=document.querySelector("h1");
var clutter ="";
varj=0;
for(var i=0;i<Math.floor(h1.textContent.length/2);i++){
    clutter += `span data-chacha="lab lab" data-delay="${i}">${h1.textContent};j++`
}



























// document.querySelector(".text").addEventListener("mouseenter",function(){
//     gsap.to("#line",{
//         width:"100%",
//         left:"0%",
//         ease:Expo.easeInOut,
//         duration:.3,
// })})
// document.querySelector(".text").addEventListener("mouseleave",function(){
//     gsap.to("#line",{
//         width:"0%",
//         left:"100%",
//         ease:Expo.easeInOut,
//         duration:.3,
//         onComplete:function(){
//             document.querySelector("#line").style.left="0";
//         }
// })    
// })
