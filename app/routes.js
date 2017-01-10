'use strict';

module.exports = (app, mongoose) => {

    // render the homepage page
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../index.html');
      });

  };
