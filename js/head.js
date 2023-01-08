const dstophead = document.querySelector("dstophead");

let prevScrollPos = window.pageYOffset;

window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos){
        dstophead.classList.remove("scroll");
    }else{
        dstophead.classList.add("scroll");
    }

    prevScrollPos = currentScrollPos;
}