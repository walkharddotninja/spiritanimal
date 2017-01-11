'use strict';

module.exports = (app, mongoose) => {

    // render the homepage page
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../index.html');
    });

    // usually this next snippit of code is done in a seperate file (the schema and model)
    // but for simplicity sake I am including this in here to be used in the route below.

    let animalSchema = mongoose.Schema({
    first: String,
    last: String,
    spiritanimal: String
    });

    const spiritanimal = mongoose.model('Spiritanimal', animalSchema);


    app.post('/spiritanimal', (req, res) => {

        // grab first and last names from request
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;

        // if one of them is empty, we have a bad request. Send a 400 [bad request] back
        if(firstName === undefined || lastName === undefined) {
          return res.sendStatus(400)
        }

        // using the spiritanimal model we defined above
        // we are using a findOne using the fields provided in the schema and mapping them
        // to the first and last name (lowercase of course) provided by our request
        // for more info, look into Mongoose
        spiritanimal.findOne({first: firstName.toLowerCase(), last: lastName.toLowerCase()}, (err, result) => {

          // if we have an error, send a 500 [internal server error]
          if(err) {
            console.log('Yikes we hit an error!');
            return res.sendStatus(500);
          }

          // if their is no record, 404 [not found] it!
          if(result ===  null) {
            return res.sendStatus(404);
          }

          // send back the full JSON
          return res.send(result);
        });
    });
  };
