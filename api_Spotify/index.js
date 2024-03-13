const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')
const port = process.env.PORT || 4001;

conectarDB()

const app = express();
app.use(cors())
app.use(express.json());

app.use("/storage", express.static('storage'))
app.use('/api', require('./routes/routes'))

app.listen(port, () => {
    console.log('Server listening on port', port);
})
