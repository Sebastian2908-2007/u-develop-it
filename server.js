const express = require("express");
const db = require('./db/connection');
const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// midddlewhere for apiRoutes
app.use('/api', apiRoutes);



// default response for any other request (Not Found)

app.use((req, res) => {
    res.status(404).end();
});

// Startserver after DB connection
db.connect(err => {
    if(err) throw err;
    console.log('Database connected.');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });
});