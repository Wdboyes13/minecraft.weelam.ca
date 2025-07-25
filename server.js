const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const fs = require('fs');
const https = require('https');
const { exec } = require('child_process');

const app = express();

const staticPath = path.join(__dirname, 'www'); // Your static folder

const options = {
  key: fs.readFileSync('/home/william/.certs/minecraft-priv.pem'),
  cert: fs.readFileSync('/home/william/.certs/minecraft.pem')
};

app.use(serveStatic(staticPath));

app.get('/api/status', (req, res) => {
  exec('/home/william/mcweb/mcweb/serverstat.sh', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing script:', error);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error('Script stderr:', stderr);
    }
    res.send({ output: stdout });
  });
});

const PORT = 443; // HTTPS default port

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS Server running at https://localhost:${PORT}`);
});
