import express from "express";
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js";




const app = express();
const PORT = 5000;



//data understanding middlewere
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//connect DB
connectDB()

app.get("/", (req, res) => {
  res.json({ msg: "hello world!!!" });
});



app.use('/movies',movieRoutes) 
app.listen(PORT, () => {
  console.log(`app runing at http://localhost:${PORT}`);
});
