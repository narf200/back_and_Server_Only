let http = require('http')

http
.createServer((req, res) => {
  if (req.url.slice(1) === 'profile'){
    res.write('this is profile');
  }
      if (req.url.slice(1) === 'sparta'){
        res.write('this is Sparta');
      }
  res.end();
})
.listen(8080)  