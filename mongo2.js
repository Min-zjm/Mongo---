var handler=require('./mongo1.js')   //引入
//删除：
handler('deletes','table1',{'name':'bella'},function(){
	      console.log('删除成功')
   })


//express  router