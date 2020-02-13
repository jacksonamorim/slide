const s = (el) => document.querySelector(el);
const sa = (el) => document.querySelectorAll(el);
const ind = sa('.slit');

let slideItem = 0;
window.onload = function(){
    setInterval(()=>{
        if(slideItem>=2){
            slideItem = 0;
        }else{
            slideItem++;
        }
        document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(1000*slideItem)+"px";
        ind.forEach(function (el, i){
            if(i == slideItem){
                el.classList.add('ativo');
            }else{
                el.classList.remove('ativo');
            }
        });
    }, 2000)
}
function mudar(pos){
    slideItem = pos;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(1000*slideItem)+"px";
}

ind.forEach((ind)=>{
    ind.addEventListener('click', ()=>{
        s('.slit.ativo').classList.remove('ativo');
        ind.classList.add('ativo');
    })
})

s('.prev').addEventListener('click', ()=>{
    if(slideItem<=0){
        slideItem = 2;
    }else{
        slideItem--;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(1000*slideItem)+"px";
    ind.forEach(function (el, i){
        if(i == slideItem){
            el.classList.add('ativo');
        }else{
            el.classList.remove('ativo');
        }
    });
})
s('.next').addEventListener('click', ()=>{
    if(slideItem>=2){
        slideItem = 0;
    }else{
        slideItem++;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(1000*slideItem)+"px";
    ind.forEach(function (el, i){
        if(i == slideItem){
            el.classList.add('ativo');
        }else{
            el.classList.remove('ativo');
        }
    });
})