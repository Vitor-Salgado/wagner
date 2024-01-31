
function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{ 
        itens.style.display = 'block' 
    }
    if(burguer.style.postion == 'sticky'){
        burguer.style.postion = 'sticky'
    }else{
        burguer.style.postion = 'sticky'
    }
}
function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    }else {
        itens.style.display = 'none'
    }
}
