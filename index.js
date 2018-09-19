const skill = require('./skill');

module.exports.mainGET = function(request, response) {

  console.log(JSON.stringify(request.body, null, 2));

  skill.invoke(request.body)
    .then(function(responseBody) {
      response.json(responseBody);
    })
    .catch(function(error) {
      console.log(error);
      response.status(500).send('Error during the request');
    });
}
