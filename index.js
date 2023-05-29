const express=require('express');
const app=express();
const path=require('path');
PORT=8000;

 
const staticpath=path.join(__dirname,'./public');
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.write("hello from express server");
    res.send();
});
app.listen(PORT,()=>{
    console.log(`app is started on port:${PORT}`);
})