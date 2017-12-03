var all= document.getElementById('all')
var framework=document.getElementById('framework')
var vallina=document.getElementById('vallina')
all.onclick= function(){
    portfolioBar.className = 'Bar state-1'
  }
  framework.onclick= function(){
    portfolioBar.className = 'Bar state-2'
  }
  vallina.onclick= function(){
    portfolioBar.className = 'Bar state-3'
  }
  
  window.onscroll = function (xxxxx){
    (window.scrollY > 0)?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
   }

   //加载动画
var stressing=document.getElementById('stressing')
   setTimeout(function(){  
   stressing.classList.remove('active')  
  }  , 200);

  //点击菜单定位
  let aTags = document.querySelectorAll('nav > ul > li > a')
  console.log(aTags)
  for(let i=0; i<aTags.length; i++){
  aTags[i].onclick = function(x){
  x.preventDefault()                       //阻止默认动作
  let a = x.currentTarget
  let href = a.getAttribute('href') //'#siteAbout'
  let element = document.querySelector(href)
  let top = element.offsetTop
  window.scrollTo(0, top - 80)
 }
}

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

// document.onselectstart=function(){
//   alert ("你想干哈")
//   return false}
// window.oncontextmenu = function () {
//     alert("你点了右键")
//     return false;
   
//  }