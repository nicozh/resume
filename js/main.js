//loading动画
var stressing=document.getElementById('load')
  setTimeout(function(){  
  stressing.classList.remove('active')  
}  , 1000);

//子菜单
let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
liTags[i].onmouseenter = function(x){
  x.currentTarget.classList.add('active')
}
liTags[i].onmouseleave = function(x){
  x.currentTarget.classList.remove('active')
}
}


