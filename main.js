import express from 'express';

const app=express();
const PORT=7878
app.get('/',(req,res)=>{
     res.json({msg:'hello world!!!'});
});

app.listen(PORT,()=>{
    console.log(`app runing at http://localhost:${PORT}`);
});
