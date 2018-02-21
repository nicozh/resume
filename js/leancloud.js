
!function(){
  //初始化
var APP_ID = 'KBnkJTwTszs2kPq0DbuU6ER7-gzGzoHsz';
var APP_KEY = '0AKmSm6dNu8PbnWF9xtLYwWp';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//运行
var Message = AV.Object.extend('message');
var message = new Message();
var x = document.querySelector('#content')
var p = document.querySelector('#post')
var n = document.querySelector('#name')
var li = document.querySelector('.list>ul')

p.addEventListener('submit', function (e) {
  e.preventDefault()
  message.save({
    name: n.value,
    content: x.value,
  }).then(function (object) {
    alert('留言成功');
    let e = document.createElement('li')
    e.textContent = `${object.attributes.name}: ${object.attributes.content}`
    li.appendChild(e)
  })
})

//获取数据并展示
var query = new AV.Query('message');
query.find().then(
  function (message) {
    let array = message.map((item) => item.attributes)
    array.forEach((item) => {
      let e = document.createElement('li')
      e.innerText = `${item.name}: ${item.content}`
      li.appendChild(e)
    })
  }
)

}()


