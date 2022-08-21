const express = require('express')
const request = require('request'); 
const cors = require('cors');
const app = express()
var port = process.env.PORT || 3000
app.use(cors({
  origin:"*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
var JsonParser = express.json() //Can also be written as app.use(bodyParser.json()) to avoid explicitly stating.

//Options for calling the BORZO API FROM this Backend.
const options = {
  url: 'https://robotapitest-in.borzodelivery.com/api/business/1.2/calculate-order',
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'X-DV-Auth-Token':'25F41401FA4233096E0AD8A57888123456AE101F',
  },
  
};

app.post('/', JsonParser,(req, res) => {  
  options.json = {"matter":"Documents","points":[{"address":req.body.from_address},{"address":req.body.to_address}]}
  console.log(options)
  request(options, function(err,res1, body){
    res.send({"order_amount":body.order.payment_amount, "from_address":req.body.from_address,"to_address":req.body.to_address})
  })  
})

app.get('/test_api', (req, res)=>{
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h2>Test String</h2>'));
})
app.listen(port, () => {
  console.log(`ShipMantra example app listening on port ${port}`)
})