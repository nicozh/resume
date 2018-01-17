//初始化
var APP_ID = 'KBnkJTwTszs2kPq0DbuU6ER7-gzGzoHsz';
var APP_KEY = '0AKmSm6dNu8PbnWF9xtLYwWp';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//运行
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
var x=document.querySelector('#content')
var p=document.querySelector('#post')
var n=document.querySelector('#name')
var li=document.querySelector('.list>ul')

p.addEventListener('submit',function(e){
    e.preventDefault()
    testObject.save({
        name: n.value,
        content: x.value,
      }).then(function(object) {
        alert('LeanCloud Rocks!');
        let e=document.createElement('li')
        e.textContent= `${object.attributes.name}: ${object.attributes.content}`
        li.appendChild(e)
      })
})

//获取数据
var query = new AV.Query('TestObject');
query.find().then(
function (TestObject) {
    let array = TestObject.map((item)=>item.attributes )
    array.forEach((item)=>{
    let e = document.createElement('li')
    e.innerText = `${item.name}: ${item.content}`
    li.appendChild(e)
    })
} 
)



