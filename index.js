const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Its mean that har request par static file iss folder pa dhunda hai
app.use(express.static(path.join(__dirname,'/public')));
//This line is used to render the EJS pages
app.set('view engine','ejs');

//To dynamic Routing Use the Colon with this you can easily make the dynamic routing
app.get('/profile/:username',function(req, res){
    res.send(req.params.username);
})
app.get('/student/:stdname/:password/:email',function(req,res){
    res.send(req.params);
})

app.listen(3000,function() {
    console.log("it is running");
});