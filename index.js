var express= require('express');    //express module
var app=express(); 
app.set('port',process.env.PORT || 3000);    // port environment variable or port number
app.get('/',function(req,res){
	res.type('text/plain');
	res.send("travel world amir");
});

app.get('/about',function(req,res){
	res.type('text/plain');
	res.send("travel world - about amir");
})

app.listen(app.get('port'),function(){
	console.log('Express started on localhost');
});
