let span=document.getElementsByTagName("span"),product=document.getElementsByClassName("product"),product_page=Math.ceil(product.length/4),index=0,movePer=25.34,maxMove=203,mobile_view=window.matchMedia("(max-width: 768px)");mobile_view.matches&&(movePer=50.36,maxMove=504);let right_mover=()=>{index+=movePer,1==product&&(index=0);for(const e of product)index>maxMove&&(index-=movePer),e.style.left="-"+index+"%"},left_mover=()=>{};span[1].onclick=()=>{right_mover()},span[0].onclick=()=>{left_mover()};