const express = require('express');
const morgan = require('morgan');
const app = express();
const { list, find } = require('./trailBank');

app.use(express.static('./public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>World's Greatest Trails</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="trail-list">
        <header><img src="images/two-hikers.png" alt="hikers hiking up mountain">World's Greatest Trails</header>
        ${list()
          .map((trail) => {
            return `
            <div class="trail-item">
              <p>
                <span class="trails-position">${trail.id}.</span>
                <a href="/${trail.id}">${trail.name}</a>
                <small>in ${trail.country}</small>
              </p>
              <small class="trail-info">
                Rating: ${trail.stars} | Difficulty: ${trail.difficulty} | Length: ${trail.length} miles
              </small>
              <div>
                <img src="images/${trail.image}" alt=${trail.imageAlt} width="200">
              </div>
            </div>`;
          })
          .join('')}
      </div>
    </body>
  </html>
  `);
});

app.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const trail = find(id);
  if (trail.id) {
    const trail = find(req.params.id);
    res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>World's Greatest Trails</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="trail-list">
        <header><img src="images/two-hikers.png" alt="hikers hiking up mountain">
        <a href="/">World's Greatest Trails</a></header>
        <div class="trail-item">
          <p>
            <span class="trails-position">${trail.id}.</span>${trail.name}
            <small>in ${trail.country}</small>
          </p>
          <small class="trail-info">
            Rating: ${trail.stars} | Difficulty: ${trail.difficulty} | Length: ${trail.length} miles
          </small>
          <div>
            <img src="images/${trail.image}" alt=${trail.imageAlt} width="200">
          </div>
        </div>
      </div>
  </body>
  </html>
`);
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(404);
  res.send(
    `<html><h3>Error: 404 - The Trail You Requested Couldn't Be Found. Please Try Entering Another Trail ID</h3></html>`
  );
  next();
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
