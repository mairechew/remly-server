const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/url', function(request,response){
  response.json('hello')
});

app.listen(3000);
console.log('Making magic happen on port 3000...')
