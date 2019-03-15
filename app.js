const express = require('express');

const app = express();

// set up view engine
app.set('view engine','ejs');

// create home route
app.get('/',(req,res)=>{
    res.render('home');
});

// set port to listen
app.listen(8000,()=>{
    console.log('Listening app on port 8000');

});
