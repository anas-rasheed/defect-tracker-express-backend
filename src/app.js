const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
var mongoose = require('mongoose');
// const myErrorLogger = require('./utilities/errorlogger');
// const myRequestLogger = require('./utilities/requestlogger');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

//DB connection string
mongoose.connect('mongodb://localhost/defect-tracker');

// //For CORS
// var corsOptions = {
//   origin: 'http://localhost:3000',
// };
// app.use(cors(corsOptions));
// app.disable('x-powered-by');
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With,content-type,Authorization ,Accept'
//   );
//   next();
// });

// app.use(myRequestLogger);
app.use('/', router);
// app.use(myErrorLogger);

app.listen(5000);
console.log('Server listening in port 5000');
