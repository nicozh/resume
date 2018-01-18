
 //添加offset类
 let specialTags = document.querySelectorAll('[data-x]')
 for(let i =0;i<specialTags.length; i++){
   specialTags[i].classList.add('offset')
 }
 //改变导航条的padding,让导航条浮起来
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