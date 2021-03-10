const express = require('express');
const app = express ()
const userConteroller=require('./usersController')()

app.use('/users',userConteroller);

app.listen(5000,()=> console.log('running server 5000'));