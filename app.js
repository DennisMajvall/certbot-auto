const express = require('express');
const app = express();
var fs = require('fs');

if (!fs.existsSync('/var/www')){ fs.mkdirSync('/var/www'); }
if (!fs.existsSync('/var/www/html')){ fs.mkdirSync('/var/www/html'); }

app.use(express.static('/var/www/html'));

app.listen(3001, ()=>{
  console.log('listening on port 5000');
});
