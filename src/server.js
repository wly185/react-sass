import express from 'express';
import path from 'path';

const app = express();

const __dirname = path.resolve();
if ((process.env.NODE_ENV = 'production')) {
  app.use(express.static(path.join(__dirname, 'my-app/build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
  });
}

// app.use(express.static(path.join(__dirname, 'my-app/build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT} `
  );
});
