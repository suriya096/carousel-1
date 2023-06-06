const container =document.querySelector('.container')
const btns =document.querySelectorAll('.btn')
const imglist =["img-1","img-2","img-3","img-4"]

let i=0

btns.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(button.classList.contains('btn-left')){
                i--;
                if(i<0){
                    i=imglist.length-1;
                }
                container.style.background = `url(img/${imglist[i]}.jpg)center/ cover no-repeat`
            }
            else{
                i++;
                if(i===imglist.length){
                    i=0;
                }
                container.style.background = `url(img/${imglist[i]}.jpg)center/ cover no-repeat`
            }
        })
})