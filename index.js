const app = require('express')();

app.set('views', './templates');
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
 res.render('index');
})

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})
