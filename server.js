const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/:parameter?', (req,res) => {
  const parameter = req.params.parameter
  if(!parameter){
    res.end('Parameter Missing !')
  }
  res.end('Parameter Sent is '+ parameter)
})

app.listen(PORT,() => {
  console.log('Magic happens at localhost:'+PORT)
})
