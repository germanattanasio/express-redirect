const express = require('express')
const app = express()
const morgan = require('morgan');
const monitor = require('express-status-monitor');

const newDomain = process.env.APP_DOMAIN || 'https://watson-api-explorer.ng.bluemix.net';

app.use(morgan('dev'));
app.use(monitor());

app.get('/domain', (req, res) => res.send(newDomain))
app.all('*', (req, res) => res.redirect(newDomain + req.originalUrl));

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))