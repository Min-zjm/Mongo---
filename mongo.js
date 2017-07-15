var mongo=require('mongodb');      //mongodb
var assert=require('assert');        // 引入断言模块
var mongoClient=mongo.MongoClient;  //创建连接池
var Urls='mongodb://localhost:27017/dbs3'; //服务器 本机名称 端口号 数据库
mongoClient.connect(Urls,function(err,db){  //db: connection/获取到的连接
	  assert.equal(null,err);
	  //给集合table1  ：添加
//	  db.collection('table1').insert({'name':'Client'},function(err,result){
//	  	  assert.equal(null,err);
//	  	  console.log('结果：'+result);
//	  	  console.log(result);
//	  })
	 //查询
//	  db.collection('table').find({'name':'apple'}).toArray(function(err,result){
//	  	  console.log(result);
//	  	  db.close();
//	  })    //表格以  数组  形式出现
//	  db.collection('table1').find({'name':'min'}).toArray(function(err,result){
//	  	  console.log(result);
//	  	  db.close();
//	  })

	  //更改
//	   db.collection('table').update({'name':'apple'},{'name':3},function(err,result){
//	  	  assert.equal(null,err);
//	  	  console.log('结果：'+result);
//	  	  console.log(result);
//	  })
   //删除
	    db.collection('table1').remove({'name':'bell'},function(err,result){
	  	  assert.equal(null,err);
	  	  console.log('结果：'+result);
	  	  console.log(result);
	  })
})

