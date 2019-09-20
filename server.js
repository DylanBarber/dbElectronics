const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')))

//Catchall handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 25565; 

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});