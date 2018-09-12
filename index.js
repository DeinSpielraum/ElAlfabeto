const skill = require('./lib/skill');

module.exports.mainGET = function(req, res) {

  console.log(JSON.stringify(req.body, null, 2));

  skill.invoke(req.body)
    .then(function(responseBody) {
      res.json(responseBody);
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).send('Error during the request');
    });
}
