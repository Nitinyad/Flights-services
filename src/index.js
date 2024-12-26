const express = require("express")

const {ServerConfig  } = require('./config')
const apiRoutes = require("./routes/index")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

console.log("inside the main index.js")
app.use('/api' , apiRoutes);
console.log("/api route registation completed")

app.listen(ServerConfig.PORT , ()=>{
    console.log(`Successfully running the server at port : ${ServerConfig.PORT}`);
})