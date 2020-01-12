const express = require('express');
const next = require('next');
const blogposts = require('./api/routes/blogposts');
// Forcing parseInt to parse to base 10
const port = parseInt(process.env.POST, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use('/api/blogposts', blogposts);
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
  });
});
