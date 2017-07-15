//封装

var mongo=require('mongodb');      //mongodb
var assert=require('assert');        // 引入断言模块
var mongoClient=mongo.MongoClient;  //创建连接池
var Urls='mongodb://localhost:27017/dbs3'; //服务器 本机名称 端口号 数据库

//Many 封装
var methodType={      //增，删，改，查
	//inserts:inserts,
	deletes:deletes,
	//updates:updates,
	//finds:finds
}
module.exports=function(type,collections,selector,fn){  //暴露--
	mongoClient.connect(Urls,function(err,db){ 
	    methodType[type](db,collections,selector,fn)   //下标--
	    db.close()
	})
}
var deletes=function(db,collections,selector,fn){
	db.collection(collections).deleteOne(selector,function(err,result){
		console.log(result);
		console.log('删除--');
	})
}




//One 封装

//删除： ---//delete模块
//var deletes=function(db,collections,selector,fn){  
//	             // collections  链接那个数据库-表格
//              //  selector      插入的数据内容
//             //   fn:回调函数
//	  db.collection(collections).deleteOne(selector,function(err,result){
//	  	  assert.equal(err,null);
//	  	  console.log(result,result.n);
//	  	  console.log(result);
//	  	  console.log('删除--');
//	  	  fn()
//	  })
//}
//     //公共代码
//mongoClient.connect(Urls,function(err,db){ 
//  deletes(db,'table',{'name':5},function(){
//	      console.log('删除成功')
//  })
//  db.close()      //释放链接
//})          //-->node mongo1  -->db.table.find()


//查询    --//find模块
//var finds=function(db,collections,selector,fn){ 
//	  db.collection(collections).findOne(selector,function(err,result){
//	  	  assert.equal(err,null);
//	  	  console.log(result,result.n);
//	  	  console.log(result);   //打印结果
//	  	  console.log('查找--');
//	  	  fn()
//	  })
//}
//    //公共代码
//mongoClient.connect(Urls,function(err,db){ 
//  finds(db,'table1',{'name':'min'},function(){
//	      console.log('查找成功')
//  })
//  db.close()      //释放链接
//})


//添加： --insert
//var inserts=function(db,collections,selector,fn){ 
//	  db.collection(collections).insertOne(selector,function(err,result){
//	  	  assert.equal(err,null);
//	  	  console.log(result,result.n);   //result  node:成功为： 1
//	  	  console.log(result);            //打印结果
//	  	  console.log('添加--');
//	  	  fn()
//	  })
//}
// //公共代码
//mongoClient.connect(Urls,function(err,db){ 
//  inserts(db,'table1',{'name':'120','sex':'M'},function(){
//	      console.log('添加成功')
//  })
//  db.close()      //释放链接
//})


//update：更新/修改   1.--传入数组 []: 2.两个参数：selector[0/1]
//var updates=function(db,collections,selector,fn){ 
//	  db.collection(collections).updateOne(selector[0],selector[1],function(err,result){
//	  	  assert.equal(err,null);
//	  	  assert.equal(result,result.n);   //断言模块 判断结果 ：0-失败
//	  	  console.log(result);            //打印结果
//	  	  console.log('修改--');
//	  	  fn()
//	  })
//}
// //公共代码
//mongoClient.connect(Urls,function(err,db){ 
//  updates(db,'table1',[{'name':'Client'},{$set:{'name':'Client5'}}],function(){
//	      console.log('修改成功')
//  })
//  db.close()      //释放链接
//})
