
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// Get our API routes
const CompanyApi = require('./server/routs/CompanyApi');
const CustomerApi = require('./server/routs/CustomerApi');
const CommentApi = require('./server/routs/CommentsApi');
const Sequelize = require('sequelize');

const app = express();
//----------------------------------------------------------

//------
//==========================================================
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist/AnguSales')));
app.use(express.static(path.join(__dirname, 'node_modules')));
// Set our api routes
app.use('/Company', CompanyApi);
app.use('/Customer', CustomerApi);
app.use('/Comment', CommentApi);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/AnguSales/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
const port = process.env.PORT || '3000';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, (ok,err) =>
{
  console.log(`API running on localhost:${port}`)
});