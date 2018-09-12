const randomize = require('../lib/randomize');

const utterances = [
  'Gracias por usar El alfabeto con Mikarmen. ¡Hasta la próxima!'
];

const cardTitle = '¡Bienvenido al Alfabeto con MiKarmen!';

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = randomize(utterances);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(cardTitle, speechText)
      .getResponse();
  },
};
