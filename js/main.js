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

 //添加offset类
  let specialTags = document.querySelectorAll('[data-x]')
  for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  //改变导航条的padding
  find()
  window.onscroll = function (xx){
    (window.scrollY > 0)?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
    find()
   }
   

    // minIndex离窗口顶部最近的元素
  function find(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =1;i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i
    }
  }
  
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#'+ id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i=0; i<brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('bright')
  }
  li.classList.add('bright')
}

   //loading动画
  var stressing=document.getElementById('load')
   setTimeout(function(){  
   stressing.classList.remove('active')  
  }  , 1000);

  //点击菜单定位
  let aTags = document.querySelectorAll('nav > ul > li > a')
  //淡入动画
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  for(let i=0; i<aTags.length; i++){
  aTags[i].onclick = function(x){
  x.preventDefault()                  //阻止默认动作
  let a = x.currentTarget
  let href = a.getAttribute('href')   
  let element = document.querySelector(href)
  let top = element.offsetTop
  // window.scrollTo(0, top - 80)

  let currentTop = window.scrollY
  let targetTop = top - 80
  let s = targetTop - currentTop // 路程
  var coords = { y: currentTop}; // 起始位置
  var t = Math.abs((s/100)*300) // 时间
  if(t>500){ t = 500 }
  var tween = new TWEEN.Tween(coords) // 起始位置
    .to({ y: targetTop}, t) // 结束位置 和 时间
    .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
    .onUpdate(function() {
      // coords.y 已经变了
      window.scrollTo(0,coords.y) // 如何更新界面
    })
    .start(); // 开始缓动

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


