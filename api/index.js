const express=require('express');
const app=express();

app.post('/api/register',(req,res)=>{
res.json('test ok2');
});

app.listen(3000);
