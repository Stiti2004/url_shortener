const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const connectDB = require('./config/db');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

// Body-parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));
//
app.use(express.static(path.join(__dirname, 'Frontend')));
// Serve static files from the "Frontend" directory
//app.use(express.static('Frontend'));

// Connect database
connectDB();

// Defining routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
