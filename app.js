const express= require('express');
const moment= require('moment');
const tz = require('moment-timezone')

var app = express();

app.get('/api/timestamp', (req, res) => {

    res.send({
        unix: moment().unix()
    })
})

app.get('/api/timestamp/:date_string', (req, res) => {

    const key = Date.parse(req.params.date_string);

    if(isNaN(key))
        res.send({
            error: "Invalid Date"
        })
  
    else
        {
            res.send({
                unix: key,
                utx: moment(req.params.date_string).tz('Europe/London').format('ddd, DD MMM YYYY hh:mm:ss zz')
            });
        }
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})